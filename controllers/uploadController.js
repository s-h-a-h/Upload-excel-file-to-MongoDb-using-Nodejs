const async = require('async')
const xlsx = require('xlsx');
const Data = require('../models/dataModel')
const keyMap = require('../utility/objectMap')
const { 
    storage, 
    upload 
} = require('../utility/multerConfig')


let checkDuplicacy = async (employee, callback) => {
    try {
        //Duplicacy check for each row against the database
        let emp = await Data.findOne({Email : employee.Email}).exec()

        if (!emp){
            let data = new Data(employee)
            await data.save()
            return callback()
        }

        callback()
    } catch (error) {
        console.log(error);
    }
}

const uploadControllerGet = (req, res) =>{
    res.render('index')
}

const uploadControllerPost = (req , res) => {
    const workBook = xlsx.readFile(req.file.path);
    const sheet_namelist = workBook.SheetNames;
    let xlData = xlsx.utils.sheet_to_json(workBook.Sheets[sheet_namelist], {raw: false});

    //async.eachSeries -> To process one candidate at a time, after reading from excel
    async.eachSeries(xlData, function(data, callback){
        let dataMap = {}
        for (const iterator in data) {
            dataMap[keyMap[iterator]] = data[iterator]
        }
        //
        checkDuplicacy(dataMap, callback);

    }, (err) => {
        if (!err){
            res.status(201).render('success') 
        }
    })
}

const uploadErrorController = (error, req, res, next)=>{
    res.status(400).send(
        {
            error:error.message
        }
)}


module.exports = {
    uploadControllerGet,
    uploadControllerPost,
    uploadErrorController
}
const multer = require('multer');

let storage = multer.diskStorage({
    destination(req, file, cb){
        cb(null,'./uploads')
    },
    filename(req, file, cb) {
        cb(null, file.originalname) 
    }
})

let upload = multer({
    limits: {
        fileSize: 10000000
    },
    fileFilter(req, file, cb){
        if (!file.originalname.match(/\.xlsx$/)){
            return cb(new Error('Please upload a PDF'));
        }
        cb(undefined, true);
    },
    storage: storage
})


module.exports = {
    storage,
    upload
}
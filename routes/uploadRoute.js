const express = require('express');
const router = new express.Router()

const { 
    uploadControllerGet, 
    uploadControllerPost, 
    uploadErrorController 
} = require('../controllers/uploadController')

const { 
    upload 
} = require('../utility/multerConfig')

//routes
router.get("/fileupload", uploadControllerGet)
router.post('/fileupload', upload.single('file') , uploadControllerPost), uploadErrorController


module.exports = router
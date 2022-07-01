const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
require('./database/mongoose')

const uploadRoutes = require('./routes/uploadRoute')
const app = express();

app.set('view engine', 'ejs')
app.use(express.json())
app.use(uploadRoutes)


app.listen(process.env.PORT || 3000, (req, res)=>{
    console.log("Server ✔");
})
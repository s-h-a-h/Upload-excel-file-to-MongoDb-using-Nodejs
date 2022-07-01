const mongoose = require('mongoose');

mongoose.connect(process.env.ATLAS_MONGO_URL, {
    useUnifiedTopology: true, 
    useNewUrlParser: true
}).then(()=>{
    console.log("Database ✔ ");
}).catch((err)=>{
    console.log(err);
})
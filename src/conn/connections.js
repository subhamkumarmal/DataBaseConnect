
const mongoose = require('mongoose');


const db ="mongodb+srv://skmcomtech:skm115@cluster0.bildd.mongodb.net/userdocment?retryWrites=true&w=majority";

mongoose.connect(db,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("DataBase has been connected..");
}).catch((err)=>{
    console.log(err);
})

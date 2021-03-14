const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const docStr = new mongoose.Schema({
    Name:String,
    Sex:String,
    Phone:String,
    Password:String,
    tokens:[{
        token:{
            type:String
        }
    }]
})

docStr.methods.athuentication= async function(){

    try{

        const token = jwt.sign({_id:this._id.toString()},"sjflsjflsjfldsjflsjflksjfljfljflkjssss");
        this.tokens = this.tokens.concat({token:token});


    }catch(err){
        console.log(err);
    }

}

docStr.pre('save', async function(next){
    try{
        this.Password= await bcrypt.hash(this.Password,10);
        next;
    }catch(err){
        console.log(err);
    }
})

const doc = new mongoose.model('user',docStr);

module.exports=doc;
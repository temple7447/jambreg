const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Compliance = new Schema({
    fullname:{
       type:String
       
    },
    matriculation:{
       type:String
        
    },
    compfield:{
       type:String
       
    }
    
})

module.exports  = mongoose.model("Compliances",Compliance )
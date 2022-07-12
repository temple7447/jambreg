const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const JambRegularization = new Schema({
    jamereg:{
       type:String
     
    },
    years:{
       type:String
       
        
    },
    meanscom:{
       type:String
       
    },
    detailform:{
       type:String
       
    }
    
})

module.exports  = mongoose.model("JambRegularization",JambRegularization )
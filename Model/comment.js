const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Comment = new Schema({
    messagecomment:{
       type:String
       
    },
    fullnamecomment:{
       type:String
        
    },
    emailcomment:{
       type:String
       
    }
    
})

module.exports  = mongoose.model("Comment",Comment )
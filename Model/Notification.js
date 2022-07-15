const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Notification = new Schema({
    message:{
       type:String,
        required:true
    },
    title:{
       type:String,
        required:true
    },
    time:{
        type:Date,
        default:Date.now
    }
    
})

module.exports  = mongoose.model("NotificationJR",Notification )
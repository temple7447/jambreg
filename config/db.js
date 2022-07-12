const mongoose = require('mongoose')
const MONGODB = process.env.MONGODB || "mongodb://localhost:27017/Jambregcheckertest"
const ONLINEMONGODB = process.env.ONLINEMONGODB || "mongodb+srv://Jambreg:Mechatronic7447@cluster0.ohii5.mongodb.net/?retryWrites=true&w=majority"

const MONGODBE = process.env.MONGODBE 

const connectDB = async ()=>{
    try {
        
       const conn = await mongoose.connect(ONLINEMONGODB, {
            useUnifiedTopology:true,
            useNewUrlParser:true,

       })

       console.log('mongoose database is connected')

    } catch (error) {
        console.log(error)
        
    }

}













module.exports = connectDB
const express = require('express')
const router = express.Router()
const mongoose = require("mongoose");
const fs = require("fs");
const General = require('../Model/General')
const JambNames = require('../Model/JambNames')

const Notification = require('../Model/Notification')


    


    router.get('/',(req,res)=>{
        JambNames.find({}).then((user)=>{
            res.render('admin',{layout:'admin', list:user})   
        }).catch((error)=>{
            console.log(error)
        })


    })


    router.post('/delete',(req,res)=>{
        const {id} = req.body;
        JambNames.deleteOne({_id:id}).then(()=>{
          res.redirect('/admin')
        }).catch((err)=>{
          console.log(err)
        })
       })

module.exports = router





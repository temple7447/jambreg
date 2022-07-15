const express = require('express')
const router = express.Router()
const mongoose = require("mongoose");
const fs = require("fs");
const General = require('../Model/General')
const JambNames = require('../Model/JambNames')

const Notification = require('../Model/Notification')


    


    router.get('/',(req,res)=>{
            res.render('admin',{layout:'admin'})  
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





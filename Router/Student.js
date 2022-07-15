const express = require('express')
const router = express.Router()
const mongoose = require("mongoose");
const multer = require("multer");
const upload = multer({ dest: 'uploads/' })
const connection = require('../config/sql')

const Notification = require('../Model/Notification')
const Complain = require('../Model/Complain')
const Comment = require('../Model/comment')

const General = require('../Model/General');
const JambRegularization = require('../Model/JambNames')



router.post('/payment',(req,res)=>{
  const {jamereg,meanscom,detailform,years} = req.body;

if(!jamereg && !detailform){
  console.log('fill or the form')
  res.redirect('/submittion')

}else
if(jamereg.length <5 || jamereg.length > 13){
  console.log('input the correct jamb number')
  res.redirect('/submittion')
 
}
else{
  JambRegularization.find()
  .then((user)=>{
    
    if(!user){
      res.send('we are still working on you work')
    }
    else{
      const NewUserG = new General({
        jamereg:jamereg,
        meanscom:meanscom,
        years:years,
        detailform:detailform
      })

      const NewUser = new JambRegularization({
        jamereg:jamereg,
        meanscom:meanscom,
        years:years,
        detailform:detailform
      })

      NewUser.save().then((us)=>{
        console.log(us)
      }).catch((err)=>{
        console.log(err)
      })
      NewUserG.save().then((us)=>{
        console.log(us)
        res.render('payment',{layout:'payment'})
      }).catch((err)=>{
        console.log(err)
      })
    }
  }).catch((err)=>{
    console.log(err)
  })

}
  
})


router.post('/student',(req,res)=>{
  const {fullname,matriculation,compfield} = req.body;

  Complain.find({}).then((user)=>{
    if(!user){
      res.send('we are still working on you work')
    }
    else{
      const NewComplain = new Complain({
        fullname:fullname,
        matriculation:matriculation,
        compfield:compfield
      })
      NewComplain.save().then(()=>{
        res.redirect('/')
      }).catch((err)=>{
        console.log(err)
      })

    }

  })



})

router.post('/studentcomment',(req,res)=>{
  const {messagecomment,fullnamecomment,emailcomment} = req.body;

  Comment.find({}).then((user)=>{
    if(!user){
      res.send('we are still working on you work')
    }
    else{
      const NewComplain = new Comment({
        messagecomment:messagecomment,
        fullnamecomment:fullnamecomment,
        emailcomment:emailcomment
      })
      NewComplain.save().then(()=>{
        res.redirect('/')
      }).catch((err)=>{
        console.log(err)
      })

    }

  })

 

  


})




module.exports = router

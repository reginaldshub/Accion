const express = require('express');
const router = express.Router();
const UseModel = require('../module/module');
module.exports = router;

//Post
router.post('/add',(req,res)=>{
    //res.send('post is working');
    if(req.body.data){
        const user = UseModel({
            // id:req.body.data.id,
            name:req.body.data.name,
            age:req.body.data.age
        });
        user.save((err,result)=>{
            if(err){
                res.status(500).send({
                    success:false,
                    message:err.message
                });
            }else if(result){
                res.status(300).send({
                    success:true, 
                    message:"data added", 
                    result
                });
            }
        });
    }else{
     res.status(400).send({
         message:"send again"
     });           
    }
});

//Get
router.get('/:id',(req,res)=>{
    res.send('get is working');
});


//Update
router.patch('/:id',(req,res)=>{
    res.send('update is working');
});

//delete
router.delete('/:id',(req,res)=>{
    res.send('delete is working');
});
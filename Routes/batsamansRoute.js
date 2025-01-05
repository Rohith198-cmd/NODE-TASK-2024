const express=require('express')
const  {executeQuery}=require('../database')
const batsmansRoute=express.Router()

batsmansRoute.get('/get',async(req,res)=>{
    const data=await executeQuery('select * from batsmans')
    res.json(data[0])
})

batsmansRoute.post('/post',async(req,res)=>{
    const {id,age,nation,bname,btype}=req.body
    const data=await executeQuery('insert into batsmans values(?,?,?,?,?)',[id,age,nation,bname,btype])
    res.json(data[0])
})

batsmansRoute.put('/:id',async(req,res)=>{
    const {id}=req.params
    const {age,nation,bname,btype}=req.body
    const data=await executeQuery('update batsmans set age=?,nation=?,bname=?,btype=? where id=?',[age,nation,bname,btype,id])
    res.json(data[0])
})

batsmansRoute.delete('/:id',async(req,res)=>{
    const data=await executeQuery('delete from batsmans where id=?',[req.params.id])
    res.json(data[0])
})

module.exports=batsmansRoute
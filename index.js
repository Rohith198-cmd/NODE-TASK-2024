const express=require('express')
const {executeQuery}=require('./database')
const batsmanRoute=require('./Routes/batsamansRoute')

const app=express()
const PORT=2022


app.use(express.json())

app.use('/batsmans',batsmanRoute)

app.all('*',(req,res)=>{
    res.status(404).send("404 was found")
})

app.listen(PORT,(err)=>{
    if(err){
        console.log(err); 
        return
    }else{
        console.log(`server is running on http://localhost:${PORT}`);
        
    }
})
const express=require('express')
const {executeQuery} = require('./table.js')
const batsmansRoute=require('./ROUTS/batsmansrouts.js')

const app=express()
const PORT=2125

app.use(express.json())

app.use('/batsmans',batsmansRoute)


app.all('*',(req,res)=>{
    res.status(404).send('404 not found')
})

app.listen(PORT,(err)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(`server is running on http://localhost:${PORT}`);
    
})

const mysql=require('mysql2/promise')

const executeQuery=async (query,data)=>{
    const connection=await mysql.createConnection({
        user:'root',
        password:'@Rohithpalani2001',
        host:'localhost',
        database:'sql_practice'
    })
    const res=await connection.execute(query,data)
    return res
}

module.exports={executeQuery}
const fs=require("fs")
const path=require("path")

const nodeMailer=require("nodemailer")
const transporter=nodeMailer.createTransport(
    {
        host:"smtp-relay.brevo.com",
        port:587,
        auth:{
            user:"82a45d001@smtp-brevo.com",
            pass:"pa3n6Y5E19JVIwqU"
        }
    })

    const sendmail=async(data)=>{
        try{
            const response=await transporter.sendMail({
                from:"rohite1967@gmail.com",
                to:"rohithpalani67@gmail.com",
                subject:"demo-testing",
                text: data
            })
            console.log(response);
        }catch(e){
            console.log(e.message);
        }
    }

const readfile=()=>{
    console.log("reading file");
    fs.readFile('mail.html','utf-8',(err,data)=>{
        if(err){
            console.log('error while reading file:',err.message);
            return
        }
        console.log('file reading completed,data :',data);
           sendmail(data)
    })
}

 module.exports=readfile

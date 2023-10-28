import express from 'express';

const app = express();
const port = 3000;

app.get("/" ,(req,res)=>{
    const today = new Date();
    let day = today.getDay();
    console.log(day);
    
    let type =" a weekday";
    let advice = "work hard"
    if(day==6 || day==0){
        type="a weekend";
        advice = "have fun"
    }
    res.render("index.ejs" ,{
        dayType :type,
        advice :advice,
    })
    
})

app.listen(port , ()=>{
    console.log(`Server listening at port ${port}`);
})
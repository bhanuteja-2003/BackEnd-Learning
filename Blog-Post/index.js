import express from "express";

import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

let data = [];
let id = 0;

app.get("/" , (req,res)=>{
    res.render("index.ejs");
})

app.post("/submit" , (req,res)=>{
    let obj = req.body;
    obj["id"]=id+1;
    data.push(obj)
    data.forEach((item)=>{
        console.log(item.content);
    })
    res.render("index.ejs" , {
        data: data,
    })
    id+=1;
    
})

app.post("/delete" , (req,res)=>{
    console.log(req.body);
    console.log(data);
    data = data.filter((item)=>item.id!=  parseInt(req.body.postId));
    // console.log(filtered);
    res.render("index.ejs" , {
        data:data,
    })
})

app.post("/update" , (req,res)=>{
    let tempObj = data.filter((item)=>item.id===parseInt(req.body.postId))
    data = data.filter((item)=>item.id!=  parseInt(req.body.postId));
    tempObj = tempObj[0];
    console.log(tempObj);
    res.render("index.ejs" , {
        updateData1  : tempObj["title"] ,
        updateData2 : tempObj["content"],
    })
})


app.listen(port ,()=>{
    console.log("Server listening at port 3000");
})
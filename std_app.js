var express = require('express');  
var app = express(); 
var stdrouter = require('./student_router');
var emprouter = require("./employee_router")
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static('open'));
app.use("/student",function(res,req,next){
    console.log("i am middleware");
    next();
})
app.set('view engine', 'pug');
app.set('views','./views');

app.get("/",function(req,res){
   res.sendFile(__dirname+"/stdhome.html")
})

app.use('/student',stdrouter)
app.use("/employee",emprouter)

app.get('/abc',function(req,res){
    console.log(req.params);
    res.send("i am working")
})
app.listen(7080,function()
{
    console.log("listening on 7080")
})  

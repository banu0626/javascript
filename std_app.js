var express = require('express');  
var app = express(); 
var stdrouter = require('./student_router');
var emprouter = require("./employee_router")
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.set('view engine', 'pug');
app.set('views','./views');

app.get("/",function(req,res){
   res.sendFile(__dirname+"/stdhome.html")
})

app.use('/student', stdrouter)
app.use("/employee",emprouter)

app.listen(7080,function()
{
    console.log("listening on 7080")
})  

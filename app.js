var express = require('express');  
var app = express(); 
var students=[];
app.use(express.urlencoded({extended:true}))
app.use(express.json()); 

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function (req, res) {  
    res.sendFile(__dirname + "/register.html");
 })
app.post('/register', function(req, res){
    console.log("request params data ::",req.body)
    students.push(req.body)
    res.render('students',{
        allstudents:students
    })
 })
    //res.send(JSON.stringify(students)) 
app.listen(7090,function()
{
    console.log("listening on 7090")
})  


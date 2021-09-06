const e = require('express');
var express=require('express')
var router= express.Router();

var employee = [{
    fullname: 'ravi',
    email: 'ravi@gmail.com',
    mobile: 1122,
    city: 'chennai',
    profession: 'manager',
    industry: 'it'
},
{
    fullname: 'sateesh',
    email: 'sat@gmail.com',
    mobile: 5566,
    city: 'ooty',
    profession: 'lead',
    industry: 'software'
},
{
    fullname: 'praveen',
    email: 'prav@gmail.com',
    mobile: 2233,
    city: 'hyd',
    profession: 'trainer',
    industry: 'Research and Development'
},
{
    fullname: 'Nidhi',
    email: 'nid@gmail.com',
    mobile: 9988,
    city: 'bengaluru',
    profession: 'HR',
    industry: 'HRD'
}];
router.get("/regemployee",function(req,res){
    res.sendFile(__dirname+"/employee.html");    
})

router.get("/employeelist",function(req,res){
    res.render("employee",{
        allemployee:employee
        })
})

router.post("/employeereg",function(req,res){    
    employee.push(req.body);
    res.send("employee registraiton successful")    
})

router.get("/details/:id",function(req,res){
    var emp = employee.find((e,i)=>{
        if(e.mobile===Number(req.params.id)){
            return true
        }
        else{
            return false;   
        }
    })
    res.render("empdetail",{
        details:emp
    })
})
module.exports = router;
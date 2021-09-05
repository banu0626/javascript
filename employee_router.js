var express=require('express')
var router= express.Router();

var employee = [];
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

module.exports = router;
var express = require('express');
var router = express.Router();
var db=require('../dBase/database');
// // to display registration form 
// router.get('/register', function(req, res, next) {
// res.render('form');
// });
// to store user input detail on post request
router.post('/register', function(req, res, next) {
inputData ={
Surname: req.body.Surname,
Firstname: req.body.Firstname,
Othernames: req.body.Othernames,
Department: req.body.Department,
Age: req.body.Age,
E-mail: req.body.E-mail,
Password: req.body.Password,
Confirm Password: req.body.Confirm Password

}
// check unique email address
var sql='SELECT * FROM registration WHERE email_address =?';
conn.query(sql, [inputData.E-mail] ,function (err, data, fields) {
if(err) throw err
if(data.length>1){
var msg = inputData.E-mail+ "was already exist";
}else if(inputData.confirm_password != inputData.password){
var msg ="Password & Confirm Password is not Matched";
  }else{

// save users data into database
var sql = 'INSERT INTO nimiemployee SET ?';
conn.query(sql, inputData, function (err, data) {
if (err) throw err;
});
var msg ="Your are successfully registered";
}
res.render('registration-form',{alertMsg:msg});
})
});
module.exports = router;

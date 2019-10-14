var express = require('express');
var router = express.Router();
const userModel = require('../model/user');
const carModel = require('../model/car');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', function(req, res, next) {
    console.log('REG');
    const{username,email,pwd}=req.body;
    const User= new userModel({username, email, pwd});
    userModel.findOne({email:email})
      .then(data=>{
          if(data) {
            res.send('Такой пользователь уже существует!');
           } else {
           User.save()
                .then((data2)=>{
                  console.log(`Пользователь сохранен! ${data2}`);
                  res.json(JSON.stringify(data2));
                })
                .catch((err)=>console.log(err));
    }
  });
});


router.post('/login', function(req, res, next) {
  const{username,pwd}=req.body;
  userModel.findOne({username:username})
      .then(data=>{
          console.log(`${JSON.stringify(data)} jjj`);
          if(data) {
              console.log("Log successful!");
            res.json(JSON.stringify(data));
            } else {
              res.json(JSON.stringify({massage:'You need registration'}));
          }
  });
});

router.post('/addcar', function (req, res, next) {
    const{model, price}=req.body;
    if (model&&price){
        const Car = new carModel({model,price});
        Car.save()
            .then((data2)=>{
                console.log(`Машина сохранена! ${data2}`);
                res.json(JSON.stringify(data2));
            })
            .catch((err)=>console.log(err));
    }

});



module.exports = router;

var express = require('express');
var router = express.Router();
const userModel = require('../model/user');


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
    const{username,email,pwd}=req.body;
    console.log('req.body'+username+pwd);
    // res.send('ok');
    userModel.find({username:username, email:email,pwd:pwd})
        .then(data=>{
            if(data) {
                console.log("Можно добавлять машину");
                console.log(`${data} ANSWER`);
                res.json(JSON.stringify(data));
            } else {
                res.json(JSON.stringify({massage:'You need login'}));
            }
        })

});



module.exports = router;

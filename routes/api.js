var express = require('express');
var router = express.Router();
const userModel = require('../model/user');
const carModel = require('../model/car');

let carList=[];

/* GET users listing. */
router.use(function (req,res,next) {
    carModel.find({})
        .then(data=> {
                if (data.length !== 0) {
                    let arr=[];
                    let oneCar;
                    data.forEach((item, i) => {
                        const {model, price} = item;
                        oneCar = {model: model, price: price};
                        arr.push(oneCar);
                    });
                    return arr;
                } else { return []; }
            }
        ).then(data=>{
        carList=data;
        console.log(carList+'CARLIST');
        next();
    }).catch((err)=>console.log(err));
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
    console.log(req.body);
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




router.get('/', function(req, res, next) {
    console.log(carList.length+' CARLIST121');
    res.render('index', { carArr: carList});
});

module.exports = router;

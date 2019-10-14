const express = require('express');
const router = express.Router();
const carModel = require('../model/car');
let carList=[];
/* GET home page. */

// router.use('/', function (req,res,next) {
//   let promise = new Promise((resolve,reject)=>{
//     carModel.find({})
//         .then(data=>{
//           if (data.length!==0){
//           let oneCar=[];
//           data.forEach((item,i)=>{
//             const { model, price } = item;
//             oneCar.push({model:model,price:price});
//           });
//           resolve(carList=oneCar);
//         } else {
//           resolve(carList=[])
//           }
//         })
//         .catch((err)=>console.log(err));
//     });
//   promise.then(data=>{
//       next()
//     }).catch((err)=>console.log(err))
// });
router.get('/', function(req, res, next) {
  // console.log(carList.length+' CARLIST121');
  res.render('index', { carArr: carList});
});


module.exports = router;

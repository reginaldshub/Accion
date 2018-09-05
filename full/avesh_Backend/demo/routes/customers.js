var express = require('express');
var router = express.Router();
var Customer = require('../models/customer');

/* GET home page. */
router.post('/add', function(req, res, next) {

		var newCustomer = new Customer(req.body.data);

		newCustomer.save( (err, customer) => {
		if(err){
			res.send(err);
		}else{
			res.json({message : "User added successfully", customer});
		}
	});
});

/* GET home page. */
router.get('/list', function(req, res, next) {
	let query = Customer.find({});
	query.exec((err, customers) => {
		if(err){
			res.send(err);
		}else{
			res.json({customers});
		}
		});
	});

/* GET home page. */
router.get('/profile/:id', function(req, res) {
  Customer.findOne({name: req.params.id}, (err, customer)=>{
  	if(err) res.send(err);
  	else	res.json(customer);
  })
});

/* GET home page. */
router.patch('/update/:id', function(req, res, next) {
  Customer.findOneAndUpdate({name: req.params.id}, req.body.data, {new: true}, (err, customer) => {
  	if(err) res.send(err);
  	else res.status(200).send({res:customer});
  	// Object.assign(customer, req.body).save((err, customer) => {
  	// 	if(err) res.send(err);
  	// 	res.json({message : "customer details updated successfully", customer});
  	// })
  })


});

/* GET home page. */
router.get('/delete/:id', function(req, res, next) {
  Customer.remove({name: req.params.id}, (err, customer) => {
  	res.json({ message: "Customer Info successfully deleted!", customer });
  });
});

module.exports = router;

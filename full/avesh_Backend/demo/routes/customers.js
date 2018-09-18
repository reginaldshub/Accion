var express = require('express');
var router = express.Router();
var Customer = require('../models/customer');
var multer = require('multer');
var upload = multer({dest: 'uploads/'});


/* GET home page. */
router.post('/add', upload.single('productImage'), function(req, res, next) {
		console.log(req.file);

		var newCustomer = new Customer(req.body.data);

		newCustomer.save( (err, customer) => {
		if(err){
			res.send(err);
		}else{
			res.json({message : "User added successfully", customer});
		}
	});
});

// 		router.post('/upload',function(req,res){
//  var newCustomer = new Customer(req.body.data);
//  newCustomer.img.data = fs.readFileSync(req.files.userPhoto.path)
//  newCustomer.img.contentType = 'image/png';
//  newCustomer.save();
// });
		

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
  Customer.find({name:req.params.id}, (err, customer)=>{
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

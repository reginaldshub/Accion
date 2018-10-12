const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads');
    },
    filename: function(req, file, cb){
        cb(null, new Date().toISOString() + file.originalname)
    }
});
const fileFilter = (req, file, cb) =>{
    // reject a file
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png')
    cb(null, true);
    else
    cb(null, false);
}

const upload = multer({storage: storage, limit: {
    fileSize: 1024 * 1024 * 5
},
fileFilter: fileFilter
});

const Product = require('../models/product');



router.get('/', (req, res, next) => {
    Product.find()
    .select('name price company parts _id productImage')
    .exec()
    .then(docs => {
        const response = {
            count: docs.length,
            products: docs.map(doc => {
                return {
                    name: doc.name,
                    price: doc.price,
                    company:doc.company,
                    parts: doc.parts,
                    productImage: doc.productImage,
                    _id: doc._id,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3001/products/'+ doc._id
                    }
                }
            })
        };
        
            res.status(200).json(response);       
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
});

router.post('/', upload.single('productImage'), (req, res, next) => {
     console.log(req);
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name:req.body.name,
        price: req.body.price,
        company: req.body.company,
        parts: req.body.parts,
        productImage: req.file.path
    });
    product.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: 'created Product',
            createdProduct: {
                name: result.name,
                price: result.price,
                company:result.company,
                parts: result.parts,
                _id: result._id,
                request: {
                    type: 'POST',
                    url: 'http://localhost:3001/products/'+result._id
                }
            }
        });
    })
    .catch(err => console.log(err));
   
});


//enhance
router.get('/:productId',(req, res, next) => {
    console.log(req);
   Product.find({name:req.params.productId})
   .select('name price company parts _id productImage')
   .exec()
   .then(doc => {
       if(doc){
           res.status(200).json({
       product: doc,
       request: {
           type: 'GET',
           url: 'http://localhost:3001/products'
       }
        });
    }else
       res.status(404).json({message:'No valid entry found for provided ID'});
    })
   .catch(err => {
       console.log(err);
       res.status(500).json({error: err});
   })
});
// router.get('/:id', function(req, res) {
//     Product.find({name:req.params.id}, (err, product)=>{
//         if(err) res.send(err);
//         else	res.json(product);
//     })
//   });

router.patch('/:productId',(req, res, next) => {
    const id = req.params.productId;
    const updateOps = {};
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    Product.update({_id: id}, {$set: updateOps})
    .exec()
    .then( result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err=> {
        onsole.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.delete('/:productId',(req, res, next) => {
    const id = req.params.productId;
    Product.remove({_id: id})
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
 });

module.exports = router;
const router = require('express').Router();
const {Product} = require('../../models');

//Get all products
router.get('/', (req, res) => {
    Product.findAll({
        order: [['created_at', 'DESC']],
        attributes: [
            'id',
            'title',
            'imageUrl',
            'price',
            'description'
        ]
    })
        .then(dbProductData => res.json(dbProductData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//Get individual product by id    
router.get('/:id', (req,res) => {
    Product.findOne({
        where: {
            id: req.params.id
        },
        attributes: [ 'id',
        'imageUrl',
        'title',
        'price',
        'description'
        ]
    })
        .then(dbProduct => res.json(dbProduct))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
var express = require('express');
var router = express.Router();
var burger = require ('../model/burger.js');

router.get ('/', function(req,res){
    burger.all (function(result){
    
        res.render('index', {data: result});
    })
    
})

// router.put('/api/burger/:id', function (req, res) {
//     var condition = `id=${req.params.id}`
//     burger.update(condition,function (result) {
//     res.sendStatus(200);
//     })

// })

// router.post('/burgers/update/:id', function (req, res) {
//     var condition = 'id = ' + req.params.id;

//     burger.update({ devoured: req.body.devoured }, condition, function () {
//         res.redirect('/burgers');
//     });
// });

router.post('/burgers/create', function (req, res) {
    console.log(req.body.burger_name, ": name of added burger")
    burger.create('burger_name', req.body.burger_name, function () {
        res.redirect('/burgers');
    });
});

router.post('/burgers/update/:id', function (req, res) {
    var condition = 'id = ' + req.params.id;

    burger.update({ devoured: req.body.devoured }, condition, function () {
        res.redirect('/burgers');
    });
});



module.exports =router;

//mySQL <= ORM <= Models <= Routes(Controllers)
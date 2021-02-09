// importing express and setting up router for the app
const express = require('express');

const router = express.Router();

//import the model burger.js to use db
const burger = require('../models/burger.js');

router.get('/', (req, res) => {
    burger.all((data) => {
        const hbsObject = {
            burgers: data,
        };
        console.log('hbsObject', hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', (req, res) => {
    burger.create(['burger_name', 'devoured'], [req.body.burger_name, 1], (result) => {
        res.redirect('/');
    });
});

router.put('/api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;
    console.log('condition', condition);

    burger.update({
        devoured: req.body.devoured,
    },
    condition,
    (result) => {
        if(result.changedRows === 0) {
            return res.status(404).end(); //if no rows changed, the id must not exist, returns 404
        }
        res.status(200).end();
    }
    );
}); 

//? maybe add a delete functionality

module.exports = router; //export routes for server.js use
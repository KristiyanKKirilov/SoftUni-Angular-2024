const express = require('express');

const app = express();

cars = [
    {
        _id: {
            $oid: "6759bee56749216e15266f40"
        },
        brand: {
            $oid: "6759c0426749216e15266f44"
        },
        model: "M5",
        price: 10000,
        year: "2012",
        city: "Sofia",
        kilometers: 150000,
        color: "black",
        gearbox: "automatic",
        horsepowers: 200,
        doors: 4,
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Tdd8DysCELe5AzwdHbX3f2E7Zn-9RNUZkg&s",
            "https://images.hgmsites.net/hug/2012-bmw-m5_100352624_h.jpg"
        ],
        userId: {
            $oid: "5fa64a072183ce1728ff3719"
        },
        created_at: {
            $date: "2020-11-07T07:19:59.933Z"
        },
        updatedAt: {
            $date: "2020-11-07T08:33:44.801Z"
        },
        __v: 0
    },
    {
        _id: {
            $oid: "6759bfbb6749216e15266f42"
        },
        brand: {
            $oid: "6759c0426749216e15266f44"
        },
        model: "X5",
        price: 10000,
        year: "2010",
        city: "Sofia",
        kilometers: 170000,
        color: "black",
        gearbox: "automatic",
        horsepowers: 200,
        doors: 4,
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Tdd8DysCELe5AzwdHbX3f2E7Zn-9RNUZkg&s",
            "https://images.hgmsites.net/hug/2012-bmw-m5_100352624_h.jpg"
        ],
        userId: {
            $oid: "5fa64a072183ce1728ff3719"
        },
        created_at: {
            $date: "2020-11-07T07:19:59.933Z"
        },
        updatedAt: {
            $date: "2020-11-07T08:33:44.801Z"
        },
        __v: 0
    }
];

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
})

app.use('/cars', (req, res, next) => {
    res.json({'cars': cars}); 
})

module.exports = app;

const express = require('express');

const app = express();

cars = [
    {
        _id: "6759bee56749216e15266f40",
        brand: "BMW",
        model: "M5",
        price: 10000,
        year: "2012",
        city: "Sofia",
        kilometers: 150000,
        engine: 'Diesel 2.2',
        color: "black",
        gearbox: "automatic",
        horsepowers: 200,
        doors: 4,
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Tdd8DysCELe5AzwdHbX3f2E7Zn-9RNUZkg&s",
            "https://images.hgmsites.net/hug/2012-bmw-m5_100352624_h.jpg",
        ],
        userId: "5fa64a072183ce1728ff3719",
        created_at: "2020-11-07T07:19:59.933Z",
        updatedAt: "2020-11-07T08:33:44.801Z",
        __v: 0
    },
    {
        _id: "6759bfbb6749216e15266f42",
        brand: "BMW",
        model: "X5",
        price: 10000,
        year: "2010",
        city: "Sofia",
        kilometers: 170000,
        engine: "Diesel 3.0",
        color: "black",
        gearbox: "automatic",
        horsepowers: 200,
        doors: 4,
        images: [
            "https://www.cnet.com/a/img/resize/2df933db83bba9be3e6f7a9563a0dc0cbcd8b681/hub/2012/05/18/810e72b4-bb76-11e2-8a8e-0291187978f3/35303113_OVR.JPG?fit=crop&height=900&width=1200",
            "https://www.motortrend.com/uploads/sites/11/2012/05/2012-BMW-X5-xDrive35i-Premium-rear-view.jpg",
        ],
        userId: "5fa64a072183ce1728ff3719",
        created_at: "2020-11-07T07:19:59.933Z",
        updatedAt: "2020-11-07T08:33:44.801Z",
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

const users = require('./models/users.js');
const cars = require('./models/cars.js');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();


// Add CORS headers middleware first
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

// Middleware to parse JSON requests
app.use(bodyParser.json());

// POST route to add a car
app.post('/cars', (req, res) => {
    cars.push({
        _id: req.body._id,
        brand: req.body.brand,
        model: req.body.model,
        price: req.body.price,
        year: req.body.year,
        city: req.body.city,
        kilometers: req.body.kilometers,
        engine: req.body.engine,
        color: req.body.color,
        gearbox: req.body.gearbox,
        horsepowers: req.body.horsepowers,
        doors: req.body.doors,
        images: req.body.images,
        userId: req.body.userId,
        created_at: req.body.created_at,
        updatedAt: req.body.updatedAt,
    });

    res.status(200).json({
        message: 'Car post submitted'
    });
});

// GET route to fetch all cars
app.get('/cars', (req, res) => {
    const enrichedCars = cars.map(car => {
        const user = users.find(user => user._id === car.userId);
        return {
            ...car,
            user: user ? { _id: user._id, username: user.username, email: user.email } : null
        };
    });
    res.json({ cars: enrichedCars });
});


app.get('/users', (req, res) => {
    const enrichedUsers = users.map(user => {
        const userCars = user.cars.map(carId => cars.find(car => car._id === carId));
        return {
            ...user,
            cars: userCars.filter(car => car !== undefined) // Include only valid cars
        };
    });
    res.json({ users: enrichedUsers });
});

app.get('/cars/:id', (req, res) => {
    const id = req.params.id;
    const car = cars.find(car => car._id === id);
    if (!car) {
        return res.status(404).json({ message: 'Car not found' });
    }
    const user = users.find(user => user._id === car.userId);
    res.json({
        ...car,
        user: user ? { _id: user._id, username: user.username, phoneNumber: user.phoneNumber } : null
    });
});

module.exports = app;

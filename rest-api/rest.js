const users = require('./models/users.js');
const cars = require('./models/cars.js');
const brands = require('./models/brands.js');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();


app.use(cors({
    origin: 'http://localhost:4200', // Specific allowed origin
    methods: ['GET', 'POST'],       // Specific allowed methods
    credentials: true               // For cookies or Authorization headers
}));

app.use(bodyParser.json());

app.post('/register', async (req, res) => {
    const { email, username, password, phoneNumber } = req.body;

    // Validate required fields
    if (!email || !username || !password || !phoneNumber) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if the user already exists
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        return res.status(400).json({ message: 'Email already registered' });
    }

    try {
        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user object
        const newUser = {
            _id: new Date().getTime().toString(), // Unique ID for this example
            email,
            username,
            password: hashedPassword, // Save the hashed password
            phoneNumber,
            cars: [], // No cars initially
        };

        // Add the new user to the users array
        users.push(newUser);

        // Respond with user info (excluding password)
        res.status(201).json({
            message: 'Registration successful',
            user: {
                _id: newUser._id,
                email: newUser.email,
                username: newUser.username,
                phoneNumber: newUser.phoneNumber,
            },
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});


app.get('/profile', (req, res) => {
    const { _id: userId } = req.user;

    userModel.findOne({ _id: userId }, { password: 0, __v: 0 }) // Exclude password and __v fields
        .then((user) => {
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        });
});

// POST route for User Login
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Find the user by email
    const user = users.find(user => user.email === email);
    console.log(user);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Check if the password is correct
    if (user.password !== password) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Respond with success and user info (excluding password)
    res.status(200).json({
        message: 'Login successful',
        user: {
            _id: user._id,
            email: user.email,
            username: user.username,
            phoneNumber: user.phoneNumber,
        },
    });
});

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
        created_at: req.body.created_at || new Date().toISOString(), // Default to current date if missing
        updatedAt: req.body.updatedAt || new Date().toISOString(),
    });


    res.status(200).json({
        message: 'Car post submitted'
    });
});

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

app.get('/brands', (req, res) => {
    res.json({brands});
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

app.get('/brands/:id', (req, res) => {
    const brandId = parseInt(req.params.id, 10); // Parse brand id as an integer
    const brand = brands.find(brand => brand.id === brandId); // Find the brand by id

    if (!brand) {
        return res.status(404).json({ message: 'Brand not found' });
    }

    // Filter cars that match the brand name
    const brandCars = cars.filter(car => car.brand === brand.name);

    res.json({
        brand: brand, // Return brand information
        cars: brandCars, // Return cars associated with the brand
    });
});



module.exports = app;

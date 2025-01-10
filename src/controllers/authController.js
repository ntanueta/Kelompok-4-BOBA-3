const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// Register a new user
exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Check if user already exists
        User.findUserByEmail(email, async (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            if (results.length > 0) {
                return res.status(400).json({ message: 'Email is already in use' });
            }

            // Hash password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Save user
            const userData = { name, email, password: hashedPassword };
            User.createUser(userData, (err) => {
                if (err) {
                    return res.status(500).json({ error: err.message });
                }
                res.status(201).json({ message: 'User registered successfully' });
            });
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Login a user
exports.login = (req, res) => {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Find user by email
    User.findUserByEmail(email, async (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const user = results[0];

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Generate token
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });

        res.status(200).json({ message: 'Login successful', token });
    });
};

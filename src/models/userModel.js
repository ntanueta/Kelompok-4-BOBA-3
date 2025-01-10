const db = require('../config/db');

// Create a new user
exports.createUser = (data, callback) => {
    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    const values = [data.name, data.email, data.password];
    db.query(query, values, callback);
};

// Find a user by email
exports.findUserByEmail = (email, callback) => {
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], callback);
};

const Peminjaman = require("../models/Model");

// Create new peminjaman
exports.createPeminjaman = (req, res) => {
    const data = req.body;
    Peminjaman.createPeminjaman(data, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: "Peminjaman berhasil dibuat", PeminjamanId: result.insertId });
    });
};

// Get all peminjaman
exports.getAllPeminjaman = (req, res) => {
    Peminjaman.getAllPeminjaman((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

// Get peminjaman by ID
exports.getPeminjamanById = (req, res) => {
    const id = req.params.id;
    Peminjaman.getPeminjamanById(id, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: "Peminjaman tidak ditemukan" });
        }
        res.status(200).json(results[0]);
    });
};

// Update peminjaman by ID
exports.updatePeminjaman = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    Peminjaman.updatePeminjaman(id, data, (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ message: "Peminjaman berhasil diupdate" });
    });
};

// Delete peminjaman by ID
exports.deletePeminjaman = (req, res) => {
    const id = req.params.id;
    Peminjaman.deletePeminjaman(id, (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ message: "Peminjaman berhasil dihapus" });
    });
};

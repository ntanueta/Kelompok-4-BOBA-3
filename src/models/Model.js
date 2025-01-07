const db = require("../config/db");

// Create new peminjaman record
exports.createPeminjaman = (data, callback) => {
    const query = "INSERT INTO peminjaman(nama_buku, nama_peminjam, tanggal_meminjam, tanggal_pengembalian, status) VALUES (?, ?, ?, ?, ?)";
    const values = [data.nama_buku, data.nama_peminjam, data.tanggal_meminjam, data.tanggal_pengembalian, data.status];
    db.query(query, values, callback);
};

// Get all peminjaman
exports.getAllPeminjaman = (callback) => {
    const query = "SELECT * FROM peminjaman";
    db.query(query, callback);
};

// Get a single peminjaman record by ID
exports.getAllPeminjamanById = (id, callback) => {
    const query = "SELECT * FROM peminjaman WHERE id = ?";
    db.query(query, [id], callback);
};

// Update peminjaman record by ID
exports.updatePeminjaman = (id, data, callback) => {
    const query = `
        UPDATE peminjaman
        SET nama_buku = ?, nama_peminjam = ?, tanggal_peminjaman = ?, tanggal_pengembalian = ?, status = ?
        WHERE id = ?
    `;
    const values = [data.nama_buku, data.nama_peminjam, data.tanggal_meminjam, data.tanggal_pengembalian, data.status, id];
    db.query(query, values, callback);
};

// Delete peminjaman record by ID
exports.deletePeminjaman = (id, callback) => {
    const query = "DELETE FROM peminjaman WHERE id = ?";
    db.query(query, [id], callback);
};
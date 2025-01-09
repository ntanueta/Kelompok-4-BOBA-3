const Book = require("../models/Book");

// Add new Book
exports.addBook = (req, res) => {
  const data = req.body;
  Book.addBook(data, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: "Buku berhasil ditambahkan", BukuId: result.insertId });
  });
};

// Get all Book
exports.getAllBook = (req, res) => {
  Book.getAllBook((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(results);
  });
};

// Get Book by ID
exports.getBookById = (req, res) => {
  const id = req.params.id;
  Book.getBookById(id, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "Buku tidak ditemukan" });
    }
    res.status(200).json(results[0]);
  });
};

// Update Book by ID
exports.updateBook = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Book.updateBook(id, data, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: "Buku berhasil diupdate" });
  });
};

// Delete Book by ID
exports.deleteBook = (req, res) => {
  const id = req.params.id;
  Book.deleteBook(id, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: "Buku berhasil dihapus" });
  });
};
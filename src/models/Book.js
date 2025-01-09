const db = require("../config/db");

// Add new Book
exports.addBook = (data, callback) => {
  const query =
    "INSERT INTO data_buku(gambar, judul_buku, penulis, penerbit, tahun_terbit, sinopsis) VALUES (?, ?, ?, ?, ?, ?)";
  const values = [
    data.gambar,
    data.judul_buku,
    data.penulis,
    data.penerbit,
    data.tahun_terbit,
    data.sinopsis,
  ];
  db.query(query, values, callback);
};

// Show All Book
exports.getAllBook = (callback) => {
  const query = "SELECT * FROM data_buku";
  db.query(query, callback);
};

// Get a single Book record by ID
exports.getBookById = (id, callback) => {
  const query = "SELECT * FROM data_buku WHERE id = ?";
  db.query(query, [id], callback);
};

// Update Book record by ID
exports.updateBook = (id, data, callback) => {
  const query = `
      UPDATE data_buku
      SET gambar = ?, 
      judul_buku = ?, 
      penulis = ?, 
      penerbit = ?, 
      tahun_terbit = ?, 
      sinopsis = ?
      WHERE id = ?
  `;
  const values = [
    data.gambar,
    data.judul_buku,
    data.penulis,
    data.penerbit,
    data.tahun_terbit,
    data.sinopsis,
    id,
  ];
  db.query(query, values, callback);
};

// Delete Book record by ID
exports.deleteBook = (id, callback) => {
  const query = "DELETE FROM data_buku WHERE id = ?";
  db.query(query, [id], callback);
};

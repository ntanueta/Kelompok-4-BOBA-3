const express = require("express");
const router = express.Router();
const peminjamanController = require("../controllers/Controller");

// Router for CRUD operations
router.post("/peminjaman", peminjamanController.createPeminjaman);
router.get("/peminjaman", peminjamanController.getAllPeminjaman);
router.get("/peminjaman/:id", peminjamanController.getPeminjamanById); // Menambahkan parameter id
router.put("/peminjaman/:id", peminjamanController.updatePeminjaman); // Menambahkan parameter id
router.delete("/peminjaman/:id", peminjamanController.deletePeminjaman); // Menambahkan parameter id

module.exports = router;

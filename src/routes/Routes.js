const express = require("express");
const router = express.Router();
const peminjamanController = require("../controllers/Controller");

// Router for CRUD operations
router.post("/peminjaman", Controller.createPeminjaman);
router.get("/peminjaman", Controller.getAllPeminjaman);
router.get("/peminjaman", Controller.getAllPeminjamanById);
router.put("/peminjaman", Controller.updatePeminjaman);
router.delete("/peminjaman", Controller.deletePeminjaman);

module.exports = router;
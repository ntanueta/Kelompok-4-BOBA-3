const express = require("express");
const router = express.Router();
const booksController = require("../controller/BooksController");
const membersController = require("../controller/MembersController");

// Router for CRUD Books
router.post("/data-buku", booksController.addBook);
router.get("/data-buku", booksController.getAllBook);
router.get("/data-buku/:id", booksController.getBookById);
router.put("/data-buku/:id", booksController.updateBook);
router.delete("/data-buku/:id", booksController.deleteBook);

// Router for CRUD Members
router.post("/data-member", membersController.addMember);
router.get("/data-member", membersController.getAllMember);
router.get("/data-member/:id", membersController.getMemberById);
router.put("/data-member/:id", membersController.updateMember);
router.delete("/data-member/:id", membersController.deleteMember);

module.exports = router;
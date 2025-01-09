const Member = require("../models/Member");

// Add new Member
exports.addMember = (req, res) => {
  const data = req.body;
  Member.addMember(data, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: "Mamber berhasil ditambahkan", MamberId: result.insertId });
  });
};

// Get all Member
exports.getAllMember = (req, res) => {
  Member.getAllMember((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(results);
  });
};

// Get Member by ID
exports.getMemberById = (req, res) => {
  const id = req.params.id;
  Member.getMemberById(id, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "Member tidak ditemukan" });
    }
    res.status(200).json(results[0]);
  });
};

// Update Member by ID
exports.updateMember = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Member.updateMember(id, data, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: "Mamber berhasil diupdate" });
  });
};

// Delete Member by ID
exports.deleteMember = (req, res) => {
  const id = req.params.id;
  Member.deleteMember(id, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: "Mamber berhasil dihapus" });
  });
};
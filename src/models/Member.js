const db = require("../config/db");

// Add new Member
exports.addMember = (data, callback) => {
  const query =
    "INSERT INTO data_member(nama_member, alamat, no_tlp) VALUES (?, ?, ?)";
  const values = [
    data.nama_member,
    data.alamat,
    data.no_tlp,
  ];
  db.query(query, values, callback);
};

// Show All Member
exports.getAllMember = (callback) => {
  const query = "SELECT * FROM data_member";
  db.query(query, callback);
};

// Get a single Member record by ID
exports.getMemberById = (id, callback) => {
  const query = "SELECT * FROM data_member WHERE id = ?";
  db.query(query, [id], callback);
};

// Update Member record by ID
exports.updateMember = (id, data, callback) => {
  const query = `
      UPDATE data_member
      SET nama_member = ?, 
      alamat = ?, 
      no_tlp = ?
      WHERE id = ?
  `;
  const values = [
    data.nama_member,
    data.alamat,
    data.no_tlp,
    id,
  ];
  db.query(query, values, callback);
};

// Delete Member record by ID
exports.deleteMember = (id, callback) => {
  const query = "DELETE FROM data_member WHERE id = ?";
  db.query(query, [id], callback);
};

const { User } = require('../models');
const bcrypt = require('bcrypt');

exports.getAllUser = async (req, res) => {
  try {
    const rows = await User.findAll();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const row = await User.findByPk(req.params.id);
    if (!row) return res.status(404).json({ error: 'User not found' });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const payload = { ...req.body };
    if (payload.password) {
      payload.password = await bcrypt.hash(payload.password, 10);
    }
    const row = await User.create(payload);
    res.status(201).json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const payload = { ...req.body };
    if (payload.password) {
      payload.password = await bcrypt.hash(payload.password, 10);
    }
    const [updated] = await User.update(payload, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'User not found' });
    const row = await User.findByPk(req.params.id);
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deleted = await User.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



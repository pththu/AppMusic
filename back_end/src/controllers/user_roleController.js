const { UserRole } = require('../models');

exports.getAllUserRole = async (req, res) => {
  try {
    const rows = await UserRole.findAll();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserRoleById = async (req, res) => {
  try {
    const row = await UserRole.findByPk(req.params.id);
    if (!row) return res.status(404).json({ error: 'UserRole not found' });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createUserRole = async (req, res) => {
  try {
    const row = await UserRole.create(req.body);
    res.status(201).json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateUserRole = async (req, res) => {
  try {
    const [updated] = await UserRole.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'UserRole not found' });
    const row = await UserRole.findByPk(req.params.id);
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteUserRole = async (req, res) => {
  try {
    const deleted = await UserRole.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'UserRole not found' });
    res.json({ message: 'UserRole deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



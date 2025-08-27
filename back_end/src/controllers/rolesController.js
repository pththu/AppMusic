const { Roles } = require('../models');

exports.getAllRoles = async (req, res) => {
  try {
    const rows = await Roles.findAll();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getRolesById = async (req, res) => {
  try {
    const row = await Roles.findByPk(req.params.id);
    if (!row) return res.status(404).json({ error: 'Roles not found' });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createRoles = async (req, res) => {
  try {
    const row = await Roles.create(req.body);
    res.status(201).json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateRoles = async (req, res) => {
  try {
    const [updated] = await Roles.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Roles not found' });
    const row = await Roles.findByPk(req.params.id);
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteRoles = async (req, res) => {
  try {
    const deleted = await Roles.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Roles not found' });
    res.json({ message: 'Roles deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



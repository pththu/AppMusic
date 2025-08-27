const { Follows } = require('../models');

exports.getAllFollows = async (req, res) => {
  try {
    const rows = await Follows.findAll();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getFollowsById = async (req, res) => {
  try {
    const row = await Follows.findByPk(req.params.id);
    if (!row) return res.status(404).json({ error: 'Follows not found' });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createFollows = async (req, res) => {
  try {
    const row = await Follows.create(req.body);
    res.status(201).json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateFollows = async (req, res) => {
  try {
    const [updated] = await Follows.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Follows not found' });
    const row = await Follows.findByPk(req.params.id);
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteFollows = async (req, res) => {
  try {
    const deleted = await Follows.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Follows not found' });
    res.json({ message: 'Follows deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



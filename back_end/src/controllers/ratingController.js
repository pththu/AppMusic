const { Rating } = require('../models');

exports.getAllRating = async (req, res) => {
  try {
    const rows = await Rating.findAll();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getRatingById = async (req, res) => {
  try {
    const row = await Rating.findByPk(req.params.id);
    if (!row) return res.status(404).json({ error: 'Rating not found' });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createRating = async (req, res) => {
  try {
    const row = await Rating.create(req.body);
    res.status(201).json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateRating = async (req, res) => {
  try {
    const [updated] = await Rating.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Rating not found' });
    const row = await Rating.findByPk(req.params.id);
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteRating = async (req, res) => {
  try {
    const deleted = await Rating.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Rating not found' });
    res.json({ message: 'Rating deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



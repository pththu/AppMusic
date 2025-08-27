const { AlbumSong } = require('../models');

exports.getAllAlbumSong = async (req, res) => {
  try {
    const rows = await AlbumSong.findAll();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAlbumSongById = async (req, res) => {
  try {
    const row = await AlbumSong.findByPk(req.params.id);
    if (!row) return res.status(404).json({ error: 'AlbumSong not found' });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createAlbumSong = async (req, res) => {
  try {
    const row = await AlbumSong.create(req.body);
    res.status(201).json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateAlbumSong = async (req, res) => {
  try {
    const [updated] = await AlbumSong.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'AlbumSong not found' });
    const row = await AlbumSong.findByPk(req.params.id);
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteAlbumSong = async (req, res) => {
  try {
    const deleted = await AlbumSong.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'AlbumSong not found' });
    res.json({ message: 'AlbumSong deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



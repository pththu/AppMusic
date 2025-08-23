const sequelize = require('./init')

// Import all models
const Song = require('./song')
const Playlist = require('./playlist')
const PlaylistSong = require('./playlist_song')
const Artist = require('./artist')
const Album = require('./album')
const User = require('./user')
const Comment = require('./comment')
const FavoriteSong = require('./favorite_song')
const Follows = require('./follows')
const Genre = require('./genres')
const ListeningHistory = require('./listening_history')
const Notification = require('./notification')
const Rating = require('./rating')
const Recommend = require('./recommend')
const Roles = require('./roles')
const SearchHistory = require('./search_history')
const SongArtist = require('./song_artist')
const UserRole = require('./user_role')
const AlbumSong = require('./album_song')

// ================= Associations ================= //

// Artist ↔ Album (1-N)
Artist.hasMany(Album, { foreignKey: 'artistId', as: 'albums' })
Album.belongsTo(Artist, { foreignKey: 'artistId', as: 'artist' })

// Artist ↔ Song (1-N)
Artist.hasMany(Song, { foreignKey: 'artistId', as: 'songs' })
Song.belongsTo(Artist, { foreignKey: 'artistId', as: 'artist' })

// Album ↔ Song (N-N) thông qua AlbumSong
Album.belongsToMany(Song, {
  through: AlbumSong,
  foreignKey: 'albumId',
  otherKey: 'songId',
  as: 'songs'
})
Song.belongsToMany(Album, {
  through: AlbumSong,
  foreignKey: 'songId',
  otherKey: 'albumId',
  as: 'albums'
})

// Playlist ↔ Song (N-N) thông qua PlaylistSong
Playlist.belongsToMany(Song, {
  through: PlaylistSong,
  foreignKey: 'playlistId',
  otherKey: 'songId',
  as: 'songs'
})
Song.belongsToMany(Playlist, {
  through: PlaylistSong,
  foreignKey: 'songId',
  otherKey: 'playlistId',
  as: 'playlists'
})

// User ↔ Playlist (1-N)
User.hasMany(Playlist, { foreignKey: 'userId', as: 'playlists' })
Playlist.belongsTo(User, { foreignKey: 'userId', as: 'owner' })

// Song ↔ Artist (N-N) thông qua SongArtist
Song.belongsToMany(Artist, {
  through: SongArtist,
  foreignKey: 'songId',
  otherKey: 'artistId',
  as: 'artists'
})
Artist.belongsToMany(Song, {
  through: SongArtist,
  foreignKey: 'artistId',
  otherKey: 'songId',
  as: 'songsMulti'
})

// User ↔ FavoriteSong (N-N) thông qua FavoriteSong
User.belongsToMany(Song, {
  through: FavoriteSong,
  foreignKey: 'userId',
  otherKey: 'songId',
  as: 'favoriteSongs'
})
Song.belongsToMany(User, {
  through: FavoriteSong,
  foreignKey: 'songId',
  otherKey: 'userId',
  as: 'userFavorites'
})

// User ↔ Follows (N-N) thông qua Follows
User.belongsToMany(Artist, {
  through: Follows,
  foreignKey: 'userId',
  otherKey: 'artistId',
  as: 'followingArtists'
})
Artist.belongsToMany(User, {
  through: Follows,
  foreignKey: 'artistId',
  otherKey: 'userId',
  as: 'followers'
})

// User ↔ Roles (N-N) thông qua UserRole
User.belongsToMany(Roles, {
  through: UserRole,
  foreignKey: 'userId',
  otherKey: 'roleId',
  as: 'roles'
})
Roles.belongsToMany(User, {
  through: UserRole,
  foreignKey: 'roleId',
  otherKey: 'userId',
  as: 'users'
})

// ================= Export ================= //
module.exports = {
  sequelize,
  models: {
    Song,
    Playlist,
    PlaylistSong,
    Artist,
    Album,
    User,
    Comment,
    FavoriteSong,
    Follows,
    Genre,
    ListeningHistory,
    Notification,
    Rating,
    Recommend,
    Roles,
    SearchHistory,
    SongArtist,
    UserRole,
    AlbumSong
  }
}
const sequelize = require('../configs/database')

// Import all models
const User = require('./user');
const Role = require('./roles');
const Artist = require('./artist');
const Song = require('./song');
const Album = require('./album');
const Playlist = require('./playlist');
const Notification = require('./notification');
const Post = require('./post');
const Comment = require('./comment');
const Genre = require('./genres');
const Follow = require('./follows');
const PlaylistSong = require('./playlist_song');
const FavoriteSong = require('./favorite_song');
const ListeningHistory = require('./listening_history');
const DownloadSong = require('./download_song');
const SearchHistory = require('./search_history');
const StatDailyPlays = require('./stat_daily_plays');
const SyncStatus = require('./sync_status');
const Recommendation = require('./recommendation');
const AlbumSong = require('./album_songs');

// ================= Associations ================= //

// Artist ↔ Album (1-N)
// Artist.hasMany(Album, { foreignKey: 'artistId', as: 'albums' })
// Album.belongsTo(Artist, { foreignKey: 'artistId', as: 'artist' })

// // Artist ↔ Song (1-N)
// Artist.hasMany(Song, { foreignKey: 'artistId', as: 'songs' })
// Song.belongsTo(Artist, { foreignKey: 'artistId', as: 'artist' })

// // Album ↔ Song (N-N) thông qua AlbumSong
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

// // Playlist ↔ Song (N-N) thông qua PlaylistSong
// Playlist.belongsToMany(Song, {
//   through: PlaylistSong,
//   foreignKey: 'playlistId',
//   otherKey: 'songId',
//   as: 'songs'
// })
// Song.belongsToMany(Playlist, {
//   through: PlaylistSong,
//   foreignKey: 'songId',
//   otherKey: 'playlistId',
//   as: 'playlists'
// })

// // User ↔ Playlist (1-N)
// User.hasMany(Playlist, { foreignKey: 'userId', as: 'playlists' })
// Playlist.belongsTo(User, { foreignKey: 'userId', as: 'owner' })

// // Song ↔ Artist (N-N) thông qua SongArtist
// Song.belongsToMany(Artist, {
//   through: SongArtist,
//   foreignKey: 'songId',
//   otherKey: 'artistId',
//   as: 'artists'
// })
// Artist.belongsToMany(Song, {
//   through: SongArtist,
//   foreignKey: 'artistId',
//   otherKey: 'songId',
//   as: 'songsMulti'
// })

// // User ↔ FavoriteSong (N-N) thông qua FavoriteSong
// User.belongsToMany(Song, {
//   through: FavoriteSong,
//   foreignKey: 'userId',
//   otherKey: 'songId',
//   as: 'favoriteSongs'
// })
// Song.belongsToMany(User, {
//   through: FavoriteSong,
//   foreignKey: 'songId',
//   otherKey: 'userId',
//   as: 'userFavorites'
// })

// // User ↔ Follows (N-N) thông qua Follows
// User.belongsToMany(Artist, {
//   through: Follows,
//   foreignKey: 'userId',
//   otherKey: 'artistId',
//   as: 'followingArtists'
// })
// Artist.belongsToMany(User, {
//   through: Follows,
//   foreignKey: 'artistId',
//   otherKey: 'userId',
//   as: 'followers'
// })

// // User ↔ Roles (N-N) thông qua UserRole
// User.belongsToMany(Roles, {
//   through: UserRole,
//   foreignKey: 'userId',
//   otherKey: 'roleId',
//   as: 'roles'
// })
// Role.belongsToMany(User, {
//   through: UserRole,
//   foreignKey: 'roleId',
//   otherKey: 'userId',
//   as: 'users'
// })

// User - role
Role.hasMany(User, { foreignKey: 'roleId' });
User.belongsTo(Role, { foreignKey: 'roleId' });

// User - Sync status
User.hasMany(SyncStatus, { foreignKey: 'userId' });
SyncStatus.belongsTo(User, { foreignKey: 'userId' });

// User - Playlists
User.hasMany(Playlist, { foreignKey: 'userId' });
Playlist.belongsTo(User, { foreignKey: 'userId' });

// User - Favorite Songs
User.hasMany(FavoriteSong, { foreignKey: 'userId' });
FavoriteSong.belongsTo(User, { foreignKey: 'userId' });

// User - Search History
User.hasMany(SearchHistory, { foreignKey: 'userId' });
SearchHistory.belongsTo(User, { foreignKey: 'userId' });

// User - Listening History
User.hasMany(ListeningHistory, { foreignKey: 'userId' });
ListeningHistory.belongsTo(User, { foreignKey: 'userId' });

// User - Post
User.hasMany(Post, { foreignKey: 'userId' });
Post.belongsTo(User, { foreignKey: 'userId' });

// User - Comment
User.hasMany(Comment, { foreignKey: 'userId' });
Comment.belongsTo(User, { foreignKey: 'userId' });

// User - Download
User.hasMany(DownloadSong, { foreignKey: 'userId' });
DownloadSong.belongsTo(User, { foreignKey: 'userId' });

// User - Follow
User.hasMany(Follow, { foreignKey: 'followerId' });
Follow.belongsTo(User, { foreignKey: 'followerId' });

User.hasMany(Follow, { foreignKey: 'userFolloweeId' });
Follow.belongsTo(User, { foreignKey: 'userFolloweeId' });

// User - Notification
User.hasMany(Notification, { foreignKey: 'userId' });
Notification.belongsTo(User, { foreignKey: 'userId' });

// User - Recommendation
User.hasMany(Recommendation, { foreignKey: 'userId' });
Recommendation.belongsTo(User, { foreignKey: 'userId' });

// User - Favorite song
User.hasMany(FavoriteSong, { foreignKey: 'userId' });
FavoriteSong.belongsTo(User, { foreignKey: 'userId' });

// Song - Playlist
Song.belongsToMany(Playlist, {
  through: PlaylistSong,
  foreignKey: 'songId',
  otherKey: 'playlistId'
});
Playlist.belongsToMany(Song, {
  through: PlaylistSong,
  foreignKey: 'playlistId',
  otherKey: 'songId'
});

// Song - Album
Song.belongsTo(Album, { foreignKey: 'albumId' });
Album.hasMany(Song, { foreignKey: 'albumId' });

// Song - Recommendation
Song.hasMany(Recommendation, { foreignKey: 'songId' });
Recommendation.belongsTo(Song, { foreignKey: 'songId' });

// Song - Artist
Song.belongsToMany(Artist, {
  through: 'songs_artists',
  foreignKey: 'songId',
  otherKey: 'artistId'
});
Artist.belongsToMany(Song, {
  through: 'songs_artists',
  foreignKey: 'artistId',
  otherKey: 'songId'
});

// Song - Genres
Song.belongsToMany(Genre, {
  through: 'songs_genres',
  foreignKey: 'songId',
  otherKey: 'genreId'
});
Genre.belongsToMany(Song, {
  through: 'songs_genres',
  foreignKey: 'genreId',
  otherKey: 'songId'
});

// Song - Favorite Song
Song.hasMany(FavoriteSong, { foreignKey: 'songId' });
FavoriteSong.belongsTo(Song, { foreignKey: 'songId' });

// Download Song - Song
DownloadSong.belongsTo(Song, { foreignKey: 'songId' });
Song.hasMany(DownloadSong, { foreignKey: 'songId' });

// StatDailyPlay = Song
StatDailyPlays.belongsTo(Song, { foreignKey: 'songId' });
Song.hasMany(StatDailyPlays, { foreignKey: 'songId' });

// Post - Comment
Post.hasMany(Comment, { foreignKey: 'postId' });
Comment.belongsTo(Post, { foreignKey: 'postId' });

// Comment - Comment
Comment.hasMany(Comment, { foreignKey: 'parentId' });
Comment.belongsTo(Comment, { foreignKey: 'parentId' });

// Artist - Follow
Artist.hasMany(Follow, { foreignKey: 'artistFolloweeId' });
Follow.belongsTo(Artist, { foreignKey: 'artistFolloweeId' });

// Album - Artist
Album.belongsTo(Artist, { foreignKey: 'artistId' });
Artist.hasMany(Album, { foreignKey: 'artistId' });

// ================= Export ================= //
module.exports = {
  sequelize,
  Song,
  Playlist,
  PlaylistSong,
  Artist,
  Album,
  User,
  Comment,
  FavoriteSong,
  Follow,
  Genre,
  ListeningHistory,
  Notification,
  Recommendation,
  Role,
  SearchHistory,
  Post,
  StatDailyPlays,
  SyncStatus,
  DownloadSong,
  AlbumSong
}
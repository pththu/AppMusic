const express = require('express')
const http = require('http')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const { sequelize } = require('./models')
const { API_PREFIX } = require('./utils')


// const artistController = require('./controllers/artist')
// const albumController = require('./controllers/album')
// const playlistController = require('./controllers/playlist')
// const userController = require('./controllers/user')

const app = express()
const server = http.createServer(app)

app.set('trust proxy', true)

// Middleware
app.use(cors({
  origin: ['http://localhost:3000'], // frontend
  credentials: true
}))
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('combined'))
app.use(express.json({ limit: '50mb' }))

// Static files
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(`${API_PREFIX}/uploads/avatars`, express.static(path.join(__dirname, 'uploads', 'avatars')))

// API routes
app.use(`${API_PREFIX}/auth`, require('./routes/authRoute'))
app.use(`${API_PREFIX}/users`, require('./routes/usersRoute'))
app.use(`${API_PREFIX}/songs`, require('./routes/songsRoute'))
app.use(`${API_PREFIX}/genres`, require('./routes/genresRoute'))
app.use(`${API_PREFIX}/comments`, require('./routes/commentsRoute'))
app.use(`${API_PREFIX}/ratings`, require('./routes/ratingsRoute'))
app.use(`${API_PREFIX}/favorites`, require('./routes/favoritesRoute'))
app.use(`${API_PREFIX}/follows`, require('./routes/followsRoute'))
app.use(`${API_PREFIX}/history`, require('./routes/historyRoute'))
app.use(`${API_PREFIX}/search`, require('./routes/searchRoute'))
app.use(`${API_PREFIX}/notifications`, require('./routes/notificationsRoute'))
app.use(`${API_PREFIX}/recommend`, require('./routes/recommendRoute'))
app.use(`${API_PREFIX}/roles`, require('./routes/rolesRoute'))
app.use(`${API_PREFIX}/artists`, require('./routes/artistsRoute'))
app.use(`${API_PREFIX}/albums`, require('./routes/albumsRoute'))
app.use(`${API_PREFIX}/playlists`, require('./routes/playlistsRoute'))

// Start server
async function startServer () {
  try {
    await sequelize.sync()
    console.log('✅ Database synchronized successfully')

    server.listen(process.env.PORT || 4000, () => {
      console.log(`🎶 Music Server is running at http://localhost:${process.env.PORT || 4000}`)
    })
  } catch (error) {
    console.error('❌ Error starting server:', error)
  }
}

startServer()

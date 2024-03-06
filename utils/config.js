require('dotenv').config()

const PORT = process.env.PORT || 3001
const MONGODB_URI = process.env.MONGODB_URI.replace('app_name', process.env.APP_NAME)

module.exports = {
  PORT,
  MONGODB_URI
}
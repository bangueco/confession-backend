const app = require('./app')
const config = require('./utils/config')
const logger = require('./utils/logger')

app.listen(config.PORT, () => {
  logger.info(`Running on ${process.env.NODE_ENV} mode`)
  logger.info(`Server running on port ${config.PORT}`)
})
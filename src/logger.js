import winston from 'winston'

winston.level = process.env.LOG_LEVEL || 'info'
const handleExceptions = process.env.NODE_ENV !== 'dev'

const logger = new winston.Logger({
  level: winston.level,
  transports: [
    new winston.transports.Console({
      handleExceptions,
      humanReadableUnhandledException: handleExceptions,
      level: 'debug'
    })
  ],
  exitOnError: false
})

export default logger

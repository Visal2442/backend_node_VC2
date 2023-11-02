import config from "../config/index.js"

export function sequelizeConfig({ database, host, port, username, password }) {
    const result = {
      host: host || config.database.host,
      port: port || config.database.port,
      database,
      username: username || config.database.username,
      password: password || config.database.password,
      dialect: config.database.dialect,
      dialectOptions: {
        dateStrings: config.database.option.dateStrings,
        typeCast: config.database.option.typeCast,
        decimalNumbers: config.database.option.decimalNumbers,
      },
      timezone: config.database.timezone,
      logging: config.database.option.logging,
      pool: {
        max: config.database.option.pool.max,
        min: config.database.option.pool.min,
        acquire: config.database.option.pool.acquire,
        idle: config.database.option.pool.idle,
      },
    }
  
    return result
  }
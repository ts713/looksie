module.exports = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: 'july131992',
  DB: 'looksiedb',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
}

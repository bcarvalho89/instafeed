const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  mongoUser: process.env.MONGO_USER,
  mongoPassword: process.env.MONGO_PASSWORD
}
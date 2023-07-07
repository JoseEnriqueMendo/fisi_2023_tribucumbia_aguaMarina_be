const { Client } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'dondeAlfredo',
  password: 'villalobos',
  port: 5432,
  // ssl: {
  //   rejectUnauthorized: false,
  // },
});

client.connect();

module.exports = { client };

const dotenv = require('dotenv');
const fs = require('fs');
const  { env } = require('process');

const envConfig = dotenv.parse(fs.readFileSync('.env'))
for (const k in envConfig) {
  env[k] = envConfig[k]
}
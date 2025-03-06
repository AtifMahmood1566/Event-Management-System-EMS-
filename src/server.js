const http = require('http');
require('dotenv').config();

const app = require('./app');
require('./configuration/db')
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log("Server is running on port : ", PORT);
})
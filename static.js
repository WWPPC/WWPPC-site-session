const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const path = require('path');

app.use(express.static(path.resolve(__dirname, 'public/')));

server.listen(5175);
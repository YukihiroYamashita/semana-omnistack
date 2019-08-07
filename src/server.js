const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const mongoose = require('mongoose');

const server = express();

mongoose.connect('mongodb+srv://yukihiro:yamashita@cluster0-hwtgk.mongodb.net/omnistack?retryWrites=true&w=majority', {useNewUrlParser: true});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);
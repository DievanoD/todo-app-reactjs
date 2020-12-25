const mongoose = require('mongoose');

// Conexão com o DB
mongoose.connect('mongodb://localhost/todo', { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true });

// Padrão para todo projeto que criarmos. Desabilita mensagem de advertência de depreciação
mongoose.Promise = global.Promise;

// exportando para ser acessível nos requerimentos
module.exports = mongoose;

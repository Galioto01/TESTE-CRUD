const express = require('express');
const UserController = require('./controller/UserController');
const bodyParser = require('body-parser');

const app = express();
const userController = new UserController()
app.use(bodyParser.json());

// Rotas
app.post('/usuarios', userController.createUser);       // Criar usuário
app.get('/usuarios', userController.listUsers);         // Listar todos usuários
app.get('/usuarios/:id', userController.getUser);       // Buscar um usuário
app.put('/usuarios/:id', userController.updateUser);    // Atualizar usuário
app.delete('/usuarios/:id', userController.deleteUser); // Deletar usuário

// Servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
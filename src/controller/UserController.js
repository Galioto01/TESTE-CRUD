const UserModel = require('../model/Usermodel');

class UserController {
    static async getAllUsers(req, res) {
        try {
            const users = await UserModel.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao listar os usuários.' });
        }
    }

    static async getUserById(req, res) {
        const { id } = req.params;
        try {
            const user = await UserModel.getUserById(id);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: 'Usuário não encontrado.' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar o usuário.' });
        }
    }

    static async createUser(req, res) {
        const { nome, email } = req.body;
        if (!nome || !email) {
            return res.status(400).json({ message: 'Nome e Email são obrigatórios.' });
        }
        try {
            const userId = await UserModel.createUser(nome, email);
            res.status(201).json({ message: 'Usuário criado com sucesso.', userId });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao criar o usuário.' });
        }
    }

    static async updateUser(req, res) {
        const { id } = req.params;
        const { nome, email } = req.body;
        if (!nome || !email) {
            return res.status(400).json({ message: 'Nome e Email são obrigatórios.' });
        }
        try {
            const rowsAffected = await UserModel.updateUser(id, nome, email);
            if (rowsAffected > 0) {
                res.status(200).json({ message: 'Usuário atualizado com sucesso.' });
            } else {
                res.status(404).json({ message: 'Usuário não encontrado.' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar o usuário.' });
        }
    }

    static async deleteUser(req, res) {
        const { id } = req.params;
        try {
            const rowsAffected = await UserModel.deleteUser(id);
            if (rowsAffected > 0) {
                res.status(200).json({ message: 'Usuário deletado com sucesso.' });
            } else {
                res.status(404).json({ message: 'Usuário não encontrado.' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao deletar o usuário.' });
        }
    }
}

module.exports = UserController;

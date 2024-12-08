import { userService } from "../services/user.service.js"

const getUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers()
        res.json({
            email: req.email,
            users
        })
    } catch (error) {
        console.error(error)
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        }
        res.status(500).json({ error: "Error de servidor" })
    }
}

const getUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await userService.getUserById(id)
        res.json(user)
    } catch (error) {
        console.error(error)
        if (error instanceof Error) {
            res.status(500).json({
                message: error.message
            })
        }
        res.status(500).json({ error: "Error de servidor" })
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await userService.deleteUserById(id)
        res.json(user)
    } catch (error) {
        console.error(error);
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        }
        res.status(500).json({ error: "Error de servidor" })
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const { email, password } = req.body
        const user = await userService.updateUserById(id, email, password)
        res.json(user)
    } catch (error) {
        console.error(error);
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        }
        res.status(500).json({ error: "Error de servidor" })
    }
}

export const userController = {
    getUsers,
    getUser,
    deleteUser,
    updateUser
}


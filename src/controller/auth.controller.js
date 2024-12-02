import { authService } from "../services/auth.service.js";
import { userService } from "../services/user.service.js";

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const token = await authService.loginWithEmailAndPassword(email, password)

        res.json({ token })
    } catch (error) {
        console.error(error);
        if (error instanceof Error) {
            res.status(500).json({ message: error.message })
        } else res.status(500).json({ error: "Error de servidor" })
    }
}

const register = async (req, res) => {
    try {
        const { email, password } = req.body
        const newUser = await userService.createUserWithEmailAndPassword(email, password)
        res.json({ newUser })
    } catch (error) {
        console.error(error);
        if (error instanceof Error) {
            res.status(500).json({ message: error.message })
        } else res.status(500).json({ error: "Error de servidor" })
    }
}

export const authController = {
    login,
    register
}
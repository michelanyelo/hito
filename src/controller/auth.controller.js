// auth.controller.js
import { authService } from "../services/auth.service.js";

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const token = await authService.loginWithEmailAndPassword(email, password);
        res.status(200).json({ token }); // Status code 200 para éxito
    } catch (error) {
        next(error);  // Pasar el error al middleware de manejo de errores
    }
};

const register = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const newUser = await authService.createUserWithEmailAndPassword(email, password);
        res.status(201).json({ newUser });  // Status code 201 para creación exitosa
    } catch (error) {
        next(error);  // Pasar el error al middleware de manejo de errores
    }
};

export const authController = {
    login,
    register,
};

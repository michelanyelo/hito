// Ruta protegida
import { Router } from "express";
import { authController } from "../controller/auth.controller.js";

const router = Router();

// Login de usuario
router.post("/login", authController.login)

// Registro de usuario
router.post("/register", authController.register)

export default router;
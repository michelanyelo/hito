// Ruta protegida
import { Router } from "express";
import { authController } from "../controller/auth.controller.js";

const router = Router();

// path fijo: http://localhost:3000/api/login
// path fijo: http://localhost:3000/api/register

// Login de usuario
router.post("/login", authController.login)

// Registro de usuario
router.post("/register", authController.register)

export default router;
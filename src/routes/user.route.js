import { Router } from "express";
import { userController } from "../controller/user.controller.js";
import { verifyToken } from "../middlewares/jwt.middleware.js";

const router = Router();

// path fijo: http://localhost:3000/api/users

// leer todos los usuarios
router.get('/', verifyToken, userController.getUsers);

// crear un usuario
router.post("/", verifyToken, userController.createUser)

export default router;
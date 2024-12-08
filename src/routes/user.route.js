import { Router } from "express";
import { userController } from "../controller/user.controller.js";
import { verifyToken } from "../middlewares/jwt.middleware.js";

const router = Router();

// path fijo: http://localhost:3000/api/v1/users

// Leer todos los usuarios (ruta protegida)
router.get('/', verifyToken, userController.getUsers);

// Leer un único usuario por id (ruta protegida)
router.get('/:id', verifyToken, userController.getUser); // Añadido verifyToken aquí para protección

// Eliminar un usuario por id (ruta protegida)
router.delete('/:id', verifyToken, userController.deleteUser);

// Actualizar un usuario por id (ruta protegida)
router.put('/:id', verifyToken, userController.updateUser);

export default router;

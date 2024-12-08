import { Router } from "express";
import { albumController } from "../controller/album.controller.js";
import { verifyToken } from "../middlewares/jwt.middleware.js"; // Middleware de autenticación

const router = Router();

// Ruta base: http://localhost:3000/api/albums

// Obtener todos los álbumes (ruta pública)
router.get("/", albumController.getAllAlbums);

// Obtener un álbum por ID (ruta pública)
router.get("/:id", albumController.getAlbumById);

// Crear un nuevo álbum (ruta protegida)
router.post("/", verifyToken, albumController.createAlbum);

// Actualizar un álbum existente por ID (ruta protegida)
router.put("/:id", verifyToken, albumController.updateAlbum);

// Eliminar un álbum por ID (ruta protegida)
router.delete("/:id", verifyToken, albumController.deleteAlbum);

export default router;

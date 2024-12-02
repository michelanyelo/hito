import { Router } from "express";
import { albumController } from "../controller/album.controller.js";

const router = Router()

// Path fijo: http://localhost:3000/api/albums

// Leer todos los albums
router.get("/", albumController.getAlbums)

export default router;
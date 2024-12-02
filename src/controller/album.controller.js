import { albumService } from "../services/album.service.js";

const getAlbums = async (req, res) => {
    try {
        const albums = await albumService.getAllAlbums()
        res.json({albums})
    } catch (error) {
        console.log(error);
        if (error instanceof Error) {
            res.status(500).json({ message: error.message })
            return
        }
        res.status(500).json({ error: "Error de Servidor" })
    }
}

export const albumController = {
    getAlbums
}
import { albumService } from "../services/album.service.js";

export const albumController = {
    async getAllAlbums(req, res, next) {
        try {
            const albums = await albumService.getAllAlbums();
            res.status(200).json(albums);
        } catch (error) {
            next(error); // Delegar el error al middleware de manejo de errores
        }
    },

    async getAlbumById(req, res, next) {
        try {
            const album = await albumService.getAlbumById(req.params.id);
            res.status(200).json(album);
        } catch (error) {
            next(error); // Delegar error al middleware
        }
    },

    async createAlbum(req, res, next) {
        try {
            const album = await albumService.createAlbum(req.body);
            res.status(201).json({ album });
        } catch (error) {
            next(error); // Delegar error al middleware
        }
    },

    async updateAlbum(req, res, next) {
        try {
            const album = await albumService.updateAlbum(req.params.id, req.body);
            res.status(200).json(album);
        } catch (error) {
            next(error); // Delegar error al middleware
        }
    },

    async deleteAlbum(req, res, next) {
        try {
            await albumService.deleteAlbum(req.params.id);
            res.status(204).send(); // 204: No Content
        } catch (error) {
            next(error); // Delegar error al middleware
        }
    },
};

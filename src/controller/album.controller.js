import { albumService } from "../services/album.service.js";
import { HttpError } from "../utils/httpError.util.js";

const validateAlbumData = (data) => {
    const { title, artist, release_date, genre } = data;

    if (!title || typeof title !== "string") {
        throw new HttpError(400, "Invalid or missing 'title'");
    }
    if (!artist || typeof artist !== "string") {
        throw new HttpError(400, "Invalid or missing 'artist'");
    }
    if (release_date && isNaN(Date.parse(release_date))) {
        throw new HttpError(400, "Invalid 'release_date'");
    }
    if (genre && typeof genre !== "string") {
        throw new HttpError(400, "Invalid 'genre'");
    }
};

const createAlbum = async (req, res, next) => {
    try {
        const { uid } = req;

        if (!uid) throw new HttpError(401, "Unauthorized, no Token");

        const albumData = { ...req.body, user_id: uid };
        validateAlbumData(albumData);

        const album = await albumService.createAlbum(albumData);

        res.status(201).json({ album });
    } catch (error) {
        next(error); // Delegar error al middleware
    }
};

const getAllAlbums = async (req, res, next) => {
    try {
        const albums = await albumService.getAllAlbums();
        res.status(200).json(albums);
    } catch (error) {
        next(error); // Delegar el error al middleware de manejo de errores
    }
};

const getAlbumById = async (req, res, next) => {
    try {
        const album = await albumService.getAlbumById(req.params.id);

        if (!album) throw new HttpError(404, "Album not found");

        res.status(200).json(album);
    } catch (error) {
        next(error); // Delegar error al middleware
    }
};

const updateAlbum = async (req, res, next) => {
    try {
        const album = await albumService.getAlbumById(req.params.id);

        if (!album) throw new HttpError(404, "Album not found");

        validateAlbumData(req.body);

        const updatedAlbum = await albumService.updateAlbum(req.params.id, req.body);

        res.status(200).json(updatedAlbum);
    } catch (error) {
        next(error); // Delegar error al middleware
    }
};

const deleteAlbum = async (req, res, next) => {
    try {
        const album = await albumService.getAlbumById(req.params.id);

        if (!album) throw new HttpError(404, "Album not found");

        await albumService.deleteAlbum(req.params.id);

        res.status(204).send(); // 204: No Content
    } catch (error) {
        next(error); // Delegar error al middleware
    }
};

export const albumController = {
    getAllAlbums,
    getAlbumById,
    createAlbum,
    updateAlbum,
    deleteAlbum,
};

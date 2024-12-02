import { AlbumModel } from "../models/album.model.js";

const getAllAlbums = async () => {
    const albums = await AlbumModel.readAlbums()
    return albums
}

export const albumService = {
    getAllAlbums
}
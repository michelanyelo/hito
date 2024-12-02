import { readFile } from "node:fs/promises"
import path from "node:path"

const __dirname = import.meta.dirname
const pathFile = path.join(__dirname, "../../data/albums.json")

// Lectura de datos
const readAlbums = async () => {
    const data = await readFile(pathFile, "utf-8")
    const albums = JSON.parse(data)

    return albums
    
}

export const AlbumModel = {
    readAlbums
}
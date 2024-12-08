// Modelo con base de datos
import { pool } from "../config/database.js";

const create = async (title, artist, sales, releaseDate, genre) => {
    const query = {
        text: `
            INSERT INTO albums (title, artist, sales, release_date, genre)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *
        `,
        values: [title, artist, sales, releaseDate, genre],
    };

    const { rows } = await pool.query(query);
    return rows[0];
};

const findAll = async () => {
    const query = {
        text: "SELECT * FROM albums",
    };
    const { rows } = await pool.query(query);
    return rows;
};

const findById = async (id) => {
    const query = {
        text: "SELECT * FROM albums WHERE id = $1",
        values: [id],
    };
    const { rows } = await pool.query(query);
    return rows[0];
};

const findByArtist = async (artist) => {
    const query = {
        text: "SELECT * FROM albums WHERE artist = $1",
        values: [artist],
    };
    const { rows } = await pool.query(query);
    return rows;
};

const update = async (id, title, artist, sales, releaseDate, genre) => {
    const query = {
        text: `
            UPDATE albums 
            SET title = $1, artist = $2, sales = $3, release_date = $4, genre = $5 
            WHERE id = $6 
            RETURNING *
        `,
        values: [title, artist, sales, releaseDate, genre, id],
    };
    const { rows } = await pool.query(query);
    return rows[0];
};

const remove = async (id) => {
    const query = {
        text: "DELETE FROM albums WHERE id = $1 RETURNING *",
        values: [id],
    };
    const { rows } = await pool.query(query);
    return rows[0];
};

export const AlbumModel = {
    create,
    findAll,
    findById,
    findByArtist,
    update,
    remove,
};

-- Active: 1733681752570@@127.0.0.1@5434@hitodb
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

DROP TABLE IF EXISTS users;

DROP TABLE IF EXISTS albums;

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4 (),
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE albums (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    artist VARCHAR(255) NOT NULL,
    sales VARCHAR(50),
    release_date DATE,
    genre VARCHAR(100),
    user_id UUID NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON DELETE CASCADE
);

INSERT INTO
    albums (
        title,
        artist,
        sales,
        release_date,
        genre
    )
VALUES (
        'Thriller',
        'Michael Jackson',
        '70 million',
        '1982-11-30',
        'Pop'
    ),
    (
        'Back in Black',
        'AC/DC',
        '50 million',
        '1980-07-25',
        'Rock'
    ),
    (
        'The Dark Side of the Moon',
        'Pink Floyd',
        '45 million',
        '1973-03-01',
        'Progressive Rock'
    );

SELECT * FROM albums;

SELECT * FROM users;
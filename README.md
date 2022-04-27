# API for anime images

A simple API for anime images used [template](https://github.com/ductnn/nodejs-postgresql-boilerplate)

## Details

Get all information: https://api-anime-images.herokuapp.com/api/v1

```json
{
    success: true,
    data: [
        {
            anime_id: 1,
            anime_name: "wp5107550",
            anime_img: "https://wallpapercave.com/wp/wp5107550.jpg",
        },
        {
            anime_id: 2,
            anime_name: "wp5277954",
            anime_img: "https://wallpapercave.com/wp/wp5277954.jpg",
        },
        {
            anime_id: 3,
            anime_name: "wp2925028",
            anime_img: "https://wallpapercave.com/wp/wp2925028.jpg",
        },
        ...
    ],
}
```

## Usage

Clone this repo and install:

```sh
git clone https://github.com/ductnn/api-anime-images.git
cd api-anime-images
npm install
```

Set up enviroment variables:

```sh
cp .env.example .env

# open .env and modify the environment variables (if needed)
```

Create file `anime.sql`, you can custom images. In this repo, i used images in
[here](https://wallpapercave.com)

```sql
CREATE DATABASE anime_images_api ;
\c anime_images_api

CREATE TABLE animes(
    anime_id SERIAL PRIMARY KEY NOT NULL,
    anime_name VARCHAR(69) NOT NULL UNIQUE,
    anime_img TEXT NOT NULL
); 

INSERT INTO animes (anime_name,anime_img) VALUES('wp5107550','https://wallpapercave.com/wp/wp5107550.jpg') ON CONFLICT (anime_name) DO NOTHING;
INSERT INTO animes (anime_name,anime_img) VALUES('wp5277954','https://wallpapercave.com/wp/wp5277954.jpg') ON CONFLICT (anime_name) DO NOTHING;
INSERT INTO animes (anime_name,anime_img) VALUES('wp2925028','https://wallpapercave.com/wp/wp2925028.jpg') ON CONFLICT (anime_name) DO NOTHING;
INSERT INTO animes (anime_name,anime_img) VALUES('wp5107553','https://wallpapercave.com/wp/wp5107553.jpg') ON CONFLICT (anime_name) DO NOTHING;
INSERT INTO animes (anime_name,anime_img) VALUES('wp5107543','https://wallpapercave.com/wp/wp5107543.jpg') ON CONFLICT (anime_name) DO NOTHING;
INSERT INTO animes (anime_name,anime_img) VALUES('wp6079907','https://wallpapercave.com/wp/wp6079907.jpg') ON CONFLICT (anime_name) DO NOTHING;
INSERT INTO animes (anime_name,anime_img) VALUES('wp10927438','https://wallpapercave.com/wp/wp10927438.png') ON CONFLICT (anime_name) DO NOTHING;
INSERT INTO animes (anime_name,anime_img) VALUES('wp6582688','https://wallpapercave.com/wp/wp6582688.jpg') ON CONFLICT (anime_name) DO NOTHING;
INSERT INTO animes (anime_name,anime_img) VALUES('wp5249546','https://wallpapercave.com/wp/wp5249546.jpg') ON CONFLICT (anime_name) DO NOTHING;
INSERT INTO animes (anime_name,anime_img) VALUES('wp4696634','https://wallpapercave.com/wp/wp4696634.jpg') ON CONFLICT (anime_name) DO NOTHING;
```

Setup postgres database with [docker-compose](docker-compose.yml)

```sh
docker-compose up -d
```

Start server:

```sh
npm start
# or
npm run dev
```

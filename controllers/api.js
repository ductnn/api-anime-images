const db = require('../config/db_config')

const getAnimeImages = async (req, res) => {
    try {
        const data = await db.query('SELECT * FROM animes ORDER BY anime_id ASC'); 
        res.status(200).json({
            success: true,
            data: data.rows
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            data: "Something went wrong"
        })
    }
}

module.exports = { getAnimeImages };

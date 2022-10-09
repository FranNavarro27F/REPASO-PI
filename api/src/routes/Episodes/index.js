const { Router } = require("express");
const { Episodes }= require("../../db.js");
const { getEpisodes }= require("../../controllers/Episodes/index.js");

const router = Router();

//---- GET episodes -----------------------------
router.get("/",async (req, res)=>{
    try {
        res.json(await getEpisodes());
    } catch (e) {
        res.status(400).json({
            router:"Error controler GET episodes",
            message: e.message,
            error: e
        })
    }
});
//-----------------------------------------------x


module.exports = router;
const { Router } = require("express");
const { Character }= require("../../db.js");
const { getCharacters }= require("../../controllers/Characters/index.js");

const router = Router();

//---- GET characters ---------------------------
router.get("/", async (req, res)=>{
    try {
        res.json(await getCharacters());
    } catch (e) {
        res.status(400).json({
            router:"Error controler GET characters",
            message: e.message,
            error: e
        })
    }
});
//-----------------------------------------------x

module.exports = router;
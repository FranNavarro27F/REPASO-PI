const { Router } = require("express");
const { Character }= require("../../db.js");
const { getId, PostCaracter } = require("../../controllers/Character/index.js");
const router = Router();

//----- POST character-----------------------------
router.post("/", async (req, res)=>{
    try {
        res.json(await PostCaracter(req.body));
    } catch (e) {
        res.status(400).json({
            router:"Error controler POST character",
            message: e.message,
            error: e
        })
    }
});
//-------------------------------------------------x


//----- GET character by id -----------------------
router.get("/:id",async (req, res)=>{
    try {
        const {id}=req.params;
        res.json(await getId(id));
    } catch (e) {
        res.status(400).json({
            router:"Error controler GET character by id",
            message: e.message,
            error: e
        })
    }
});
//-------------------------------------------------x


module.exports = router;
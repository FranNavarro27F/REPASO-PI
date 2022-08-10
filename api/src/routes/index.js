const { Router } = require("express");

const {getCharacters, getEpisodes, getId}= require("./controlers/controlers.js");
const {Character, Episode }=require("../db")
const router = Router();

router.get("/characters", async (req, res)=>{
    try {
        res.json(await getCharacters());
    } catch (e) {
        res.status(400).json({error:e.message});
    }
});

router.get("/episodes",async (req, res)=>{
    try {
        res.json(await getEpisodes());
    } catch (e) {
        res.status(400).json({error:e.message})
    }
});

router.get("/character/:id",async (req, res)=>{
    try {
        const {id}=req.params;
        res.json(await getId(id));
    } catch (e) {
        res.status(400).json({error:e.message})
    }
})

router.post("/character",async (req, res)=>{
    try {
        let {img,name,origin,species,episode,created}=req.body;
        let t= await Character.create({
            name,
            img,
            origin,
            species,
            created,
        })
        await t.addEpisode(episode)
        let newCharacter = await Character.findAll({
            where:{
                id: t.id,
            },
            include: {
                model: Episode,
                attributes: ["name"],
                through:{
                    attributes:[],
                }
            }
        });
        let char= newCharacter[0].dataValues;
        res.json(char)
    } catch (e) {
        res.status(400).json({error:e.message});
    }
});


module.exports = router;

const { Router } = require("express");

const CharactersRouter= require("../routes/Characters/index.js");
const EpisodesRouter= require("../routes/Episodes/index.js");
const CharacterRouter= require("../routes/Character/index.js");

const router = Router();

router.use("/characters", CharactersRouter);
router.use("/character", CharacterRouter);
router.use("/episodes", EpisodesRouter);


module.exports = router;

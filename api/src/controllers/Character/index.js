const { Character, Episode } = require("../../db.js");
const axios =require("axios");

//--- auxiliar functions ---------------------
async function auxNamesEpisodes(arr){
    let result=arr.map(async cur=>{
        let {data}= await axios.get(cur);
        return data.name;
    })
    let r = await Promise.all(result)
    return r;
};
//--------------------------------------------x


//--- POST character----------------------------------------
const PostCaracter= async (body)=>{
    let {img,name,origin,species,episodes,created}=body;
    let t= await Character.create({
        name,
        img,
        origin,
        species,
        created,
    })
    
    await t.addEpisodes(episodes)
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

    return char;
};
//----------------------------------------------------------x


//--- GET character by id -----------------------------------
const getId= async(id)=>{
    if(id.includes("-")){
        let db= await Character.findByPk(id,{
            include: {
                model: Episode,
                attributes: ["name"]
            }
        })
        let dbs= db.dataValues;
        dbs.episodes=dbs.episodes.map(cur=> cur.name);
        return dbs;
    }else{
        let {data}= await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        let urls= data.episode;
        let apiId={
            id:data.id,
            name:data.name,
            species:data.species,
            origin:data.origin.name,
            img:data.image,
            created:data.created,
            episodes:await auxNamesEpisodes(urls)
        }
        return apiId;
    }
};
//----------------------------------------------------------x

module.exports={
    getId,
    PostCaracter
}
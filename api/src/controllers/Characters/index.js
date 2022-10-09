const { Character, Episode } = require("../../db.js");
const axios =require("axios");


//---auxiliar functions------------------
async function getNext(next){
    let {data}= await axios.get(next)
    let result= data.results;

    return [result, data.info.next]
};
//---------------------------------------x


//---- GET characters --------------------------------------------
const getCharacters= async()=>{
    let db= await Character.findAll({
        include:{
            model: Episode,
            attribute:["name"],
            through:{
                attributes:[],
            }
        }
    })
    let l= db.map(cur=> cur.dataValues);
    let ld= l.map(cur=> {
        return{
            id: cur.id,
            name: cur.name,
            species: cur.species,
            origin: cur.origin,
            img: cur.img,
            created: cur.created,
            episodes: cur.episodes.length
        }
    })
    ///--esta parte indica la cantidad de characters pedida a la api--
    let pet1= await getNext("https://rickandmortyapi.com/api/character");
    let pet2= await getNext(pet1[1]);
    let pet3= await getNext(pet2[1]);
    let pet4= await getNext(pet3[1]);
    let pet5= await getNext(pet4[1]);
    let res=pet1[0].concat(pet2[0],pet3[0],pet4[0],pet5[0]);


    let rr= await Promise.all(
       res.map(async cur=>{ 
               return{
                   id: cur.id,
                   name:cur.name,
                   species:cur.species,
                   origin:cur.origin.name,
                   img: cur.image,
                   created:cur.created,
                   episodes: cur.episode.length
               }
        })
    )
    let todos= ld.concat(rr);
    return todos;
   };
//-----------------------------------------------------------------x



module.exports={
    getCharacters,
}
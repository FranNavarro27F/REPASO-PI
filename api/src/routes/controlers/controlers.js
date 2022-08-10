const axios= require("axios");
const {Character, Episode} = require("../../db.js");

async function auxNamesEpisodes(arr){
    let result=arr.map(async cur=>{
        let {data}= await axios.get(cur);
        return data.name;
    })
    let r = await Promise.all(result)
    return r;
};

async function getNext(next){
    let {data}= await axios.get(next)
    let result= data.results;

    return [result, data.info.next]
} 

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
    ////////
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
    }else{
        let {data}= await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        let urls= data.episode;
        let apiId={
            id:data.id,
            name:data.name,
            species:data.species,
            origin:data.origin,
            img:data.image,
            created:data.created,
            episodes:await auxNamesEpisodes(urls)
        }
        console.log(apiId)
        return apiId;
    }
};

const getEpisodes= async()=>{
     let estan=await Episode.findAll();
     if(estan.length!==0){
         let res=estan.map(cur=> cur.dataValues);
         console.log("Episodes traidos de DB");
         return res;
     }else{
        let{data}= await axios.get("https://rickandmortyapi.com/api/episode");
        let episodes= data.results;
        let epi= episodes.map(cur=> {
            return {
                 name:cur.name,
             }
         });
        epi.forEach(async cur=> await Episode.create(cur));
        console.log("Episodes pedidos y guardados correctamente");
        return "todos los Episodes se guardaron bien";
        }     
};
getEpisodes();


module.exports={
    getCharacters,
    getEpisodes,
    getId
}
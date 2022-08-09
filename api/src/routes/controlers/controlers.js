const axios= require("axios");
const {Character, Episode} = require("../../db.js");
// let arr=[
//     'https://rickandmortyapi.com/api/episode/1',
//     'https://rickandmortyapi.com/api/episode/2',
//     'https://rickandmortyapi.com/api/episode/3',
//     'https://rickandmortyapi.com/api/episode/4',
//     'https://rickandmortyapi.com/api/episode/5',
//     'https://rickandmortyapi.com/api/episode/6',
//     'https://rickandmortyapi.com/api/episode/7',
//     'https://rickandmortyapi.com/api/episode/8',
//     'https://rickandmortyapi.com/api/episode/9',
//     'https://rickandmortyapi.com/api/episode/10',
//     'https://rickandmortyapi.com/api/episode/11',
//     'https://rickandmortyapi.com/api/episode/12',
//     'https://rickandmortyapi.com/api/episode/13',
//     'https://rickandmortyapi.com/api/episode/14',
//     'https://rickandmortyapi.com/api/episode/15',
//     'https://rickandmortyapi.com/api/episode/16',
//     'https://rickandmortyapi.com/api/episode/17',
//     'https://rickandmortyapi.com/api/episode/18',
//     'https://rickandmortyapi.com/api/episode/19',
//     'https://rickandmortyapi.com/api/episode/20',
//     'https://rickandmortyapi.com/api/episode/21',
//     'https://rickandmortyapi.com/api/episode/22',
//     'https://rickandmortyapi.com/api/episode/23',
//     'https://rickandmortyapi.com/api/episode/24',
//     'https://rickandmortyapi.com/api/episode/25',
//     'https://rickandmortyapi.com/api/episode/26',
//     'https://rickandmortyapi.com/api/episode/27',
//     'https://rickandmortyapi.com/api/episode/28',
//     'https://rickandmortyapi.com/api/episode/29',
//     'https://rickandmortyapi.com/api/episode/30',
//     'https://rickandmortyapi.com/api/episode/31',
//     'https://rickandmortyapi.com/api/episode/32',
//     'https://rickandmortyapi.com/api/episode/33',
//     'https://rickandmortyapi.com/api/episode/34',
//     'https://rickandmortyapi.com/api/episode/35',
//     'https://rickandmortyapi.com/api/episode/36',
//     'https://rickandmortyapi.com/api/episode/37',
//     'https://rickandmortyapi.com/api/episode/38',
//     'https://rickandmortyapi.com/api/episode/39',
//     'https://rickandmortyapi.com/api/episode/40',
//     'https://rickandmortyapi.com/api/episode/41',
//     'https://rickandmortyapi.com/api/episode/42',
//     'https://rickandmortyapi.com/api/episode/43',
//     'https://rickandmortyapi.com/api/episode/44',
//     'https://rickandmortyapi.com/api/episode/45',
//     'https://rickandmortyapi.com/api/episode/46',
//     'https://rickandmortyapi.com/api/episode/47',
//     'https://rickandmortyapi.com/api/episode/48',
//     'https://rickandmortyapi.com/api/episode/49',
//     'https://rickandmortyapi.com/api/episode/50',
//     'https://rickandmortyapi.com/api/episode/51'
//   ]

async function auxNamesEpisodes(arr){
    let result=arr.map(async cur=>{
        let {data}= await axios.get(cur);
        return data.name;
    })
    let r = await Promise.all(result)
    return r;
};
// auxNamesEpisodes(arr);

const getCharacters= async()=>{
 let {data}= await axios.get("https://rickandmortyapi.com/api/character");
 let filt= data.results;
 let Characters= await filt.map(async cur=>{ 
    let urls= cur.episode;
        return{
            id: cur.id,
            name:cur.name,
            species:cur.species,
            origin:cur.origin.name,
            img: cur.image,
            created:cur.created,
            episodes: await auxNamesEpisodes(urls)
        }
 });
 let r= await Promise.all(Characters)
 return r;
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
}
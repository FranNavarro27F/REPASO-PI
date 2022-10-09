const { Episode } = require("../../db.js");

//---- GET episodes --------------------------------------------------
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
//--------------------------------------------------------------------x


module.exports={
    getEpisodes,
}
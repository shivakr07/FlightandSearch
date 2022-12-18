const { City } = require('../models/index');

class CityRepository{
    async createCity({ name }){//obj.name but we destructured it 
        try {
            const city = await City.create({ 
                name  // same as name : name, //it makes function name  key automatically
             });
            return city;
        } catch(error){
            console.log("something went wrong in the repository layer");
            throw{error};
        }
    }
// ------------------------------------
    async deleteCity(cityId){
        try{
            await City.destroy({ //you write query inside {} like object
                where : {
                    id : cityId
                }
            });
        }catch(error){
            console.log("something went wrong in the repository layer");
            throw{error};
        }
    }
//------------------------------------------
    async updateCity(cityId, data){
        try{
            const city = await City.update(data,{
                where :{
                    id : cityId
                }
            } );
            return city;
        } catch(error){
            console.log("something went wrong in repository layer");
            throw {error};
        }
    }
// -----------------------------------------
    async getCity(cityId){
        try{
            const city = await City.findByPk(cityId);
            return city;
        } catch(error){
            console.log("something went wrong in the repository layer");
            throw {error} ;
        }
    }

}

module.exports = CityRepository;
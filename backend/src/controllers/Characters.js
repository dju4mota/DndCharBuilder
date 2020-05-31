const connection = require('../database/dbConnection')
module.exports = {

  async index(request,response) {
    const characters = await connection('characters').select('*');
    return response.json(characters);
  },


  async create(request, response) {
    const {id,name, classe,race,level, attributes} = request.body;

    await connection('characters').insert({
      id,
      name, 
      classe,
      race,
      level, 
      attributes
    })

    return response.json({id,name, level});
  },

  async change(request,response){
    const {name, classe,race,level, attributes} = request.body;
    const {id} = request.params;

    await connection('characters').where('id', id).update({
      id,
      name, 
      classe,
      race,
      level, 
      attributes
    })
    
    return response.json({id,name, level});
  },

}
const connection = require('../database/connection')
module.exports = {

  async index(req,res) {
    const personagens = await connection('personagens').select('*');
    return res.json(personagens);
  },


  async create(req, res) {
    const {id,nome, atributos} = req.body;

    await connection('personagens').insert({
      id,
      nome,
      atributos
    })

    return res.json({id,nome});
  }

}
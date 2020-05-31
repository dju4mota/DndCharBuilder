const connection = require('../database/connection')
module.exports = {

  async index(req,res) {
    const {id} = req.params;
    const atributos = await connection('personagens').where('id', id).select('atributos');
    return res.json(atributos);
  },


  async update(req, res) {
    const {atributos} = req.body;
    const {id} = req.params;

    await connection('personagens').where('id', id).update({
      atributos,
    })

    return res.json({atributos});
  }

}
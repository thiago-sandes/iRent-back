'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ComentarioAnuncio extends Model {

  user () {
    return this.belongsTo('App/Models/User')
  }

  anuncio () {
    return this.belongsTo('App/Models/Anuncio')
  }
}

module.exports = ComentarioAnuncio

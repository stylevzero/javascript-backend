'use strict'; // Hooks
const { Model } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    static beforeCreate(user, options) { //Función que se ejecuta antes de una modifación en la tabla
      //password enviado, nro de rondas, función que se ejecutará después de que las rondas se hallan ejecutado
      
      return new Promise((res, rej) => {

        if(user.password){
          bcrypt.hash(user.password_hash, 10, function(error,hash){
            user.password_tmp = hash;
            debugger;
            res();
          })
        };
  
      });

    }
  }
  User.init({
    email: { //Agregamos validaciones
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password_hash: { 
      type: DataTypes.STRING,
      },
    password_tmp: {
      type: DataTypes.VIRTUAL
      },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
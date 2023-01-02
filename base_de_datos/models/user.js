'use strict'; // Hooks
const { Model } = require('sequelize');
const bcrypt = require('bcrypt');
const e = require('express');

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
    static beforeCreate(user, options) { //Función que se ejecuta antesd e una modifación en la tabla
      //password enviado, nro de rondas, función que se ejecutará después de que las rondas se hallan ejecutado
      
      return new Promise((res, rej) => {

        if(user.password){
          bcrypt.hash(user.password, 10, function(error,hash){
            user.password_hash = hash;
          });  
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
    password_hash: DataTypes.STRING,
    password: DataTypes.VIRTUAL
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
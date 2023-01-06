'use strict'; // Hooks
const { Model } = require('sequelize');
const { DataTypes } = require("sequelize");

const bcrypt = require('bcrypt');
console.log("user.js");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
      // define association here
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
    password: {
      type: DataTypes.VIRTUAL
      }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: function(user){
        console.log(user);
        let passTemp = '';
        if(user.password_hash){
          passTemp = user.password_hash;
          bcrypt.hash(passTemp, 10, function(error,hash){
              user.password_hash = hash;
          })
        }
        console.log('passTemp:' + passTemp);
        console.log('password hash:' + password_hash);
      }
    }

    });

  /*
  User.beforeCreate(async (user, options) => {
    console.log("inside hooks");
    console.log(user.password);
      if(user.password){
        bcrypt.hash(user.password, 10, function(error,hash){
        //bcrypt.hash(user.password_hash, 10, function(error,hash){
          user.password_hash = hash;
        })
      };

  });
  */

  return User;
};
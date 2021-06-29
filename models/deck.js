'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Deck extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Deck.belongsTo(models.User)
      Deck.belongsToMany(models.Card, {through: 'DeckCards'})
    }
  };
  Deck.init({
    name: DataTypes.STRING,
    total: DataTypes.INTEGER,
    deckCode: DataTypes.TEXT,
    qrCode: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    totalPrice: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Deck',
  });
  return Deck;
};
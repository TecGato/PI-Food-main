const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Diets', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.ENUM(
        'gluten free',
        'ketogenic',
        'dairy free',
        'vegan',
        'lacto ovo vegetarian',
        'pescatarian',
        'paleolithic',
        'fodmap friendly',
        'primal',
        'whole 30',
        ''
      ),
    },
  });
};

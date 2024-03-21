'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MusicSet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Band, Stage, Event}) {
      // define association here
      MusicSet.belongsTo(Band, {
        as: "band"
      })
      MusicSet.belongsTo(Stage, {
        as: "stage"
      })
      MusicSet.belongsTo(Event, {
        as: "event"
      })
    }
  }
  MusicSet.init({
    event_id: DataTypes.INTEGER,
    stage_id: DataTypes.INTEGER,
    band_id: DataTypes.INTEGER,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'MusicSet',
  });
  return MusicSet;
};
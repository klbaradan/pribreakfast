import Sequelize from 'sequelize';
import { User } from './models';

let DB_URI = process.env.DB_URI;
if (!DB_URI) {
  throw new Error('No DB_URI specified. Please define this enviroment variable to connect to your desired database');
}

var sequelize = new Sequelize(DB_URI, {});

module.exports = {
  models: {
    User: sequelize.define('user', User)
  },

  db: sequelize
}
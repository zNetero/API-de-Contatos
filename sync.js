const sequelize = require('./database');
const User = require('./User');

async function syncDatabase() {
  try {
    await sequelize.sync({ force: true });
    console.log('Database successfully synchronized!');
  } catch (error) {
    console.error('Error synchronizing the database:', error);
  }
}


module.exports = {syncDatabase};
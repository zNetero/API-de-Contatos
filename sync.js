const sequelize = require('./database');

async function syncDatabase() {
  try {
    await sequelize.sync();
    console.log('Database successfully synchronized!');
  } catch (error) {
    console.error('Error synchronizing the database:', error);
  }
}


module.exports = {syncDatabase};
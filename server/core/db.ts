import { Sequelize } from 'sequelize';

/* NOTE: подключение к БД */
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("\x1b[32m", 'Connection has been established successfully.', "\x1b[37m");
  } catch (error) {
    console.error("\x1b[31m",'Unable to connect to the database:', error);
  }
})();

export { sequelize };

import Sequelize from "sequelize";

const sequelize = new Sequelize("slackdatabase", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  define: {
    underscored: true,
  },
});

const models = {
  User: sequelize.import("./user"),
  Channel: sequelize.import("./channel"),
  Message: sequelize.import("./message"),
  Team: sequelize.import("./team"),
};

Object.keys(models).forEach((modelName) => {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;

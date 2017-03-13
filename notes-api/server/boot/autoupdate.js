module.exports = function (app) {
  app.dataSources.notes.automigrate();
  console.log("Performed automigration.");
};

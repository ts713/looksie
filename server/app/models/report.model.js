module.exports = (sequelize, Sequelize) => {
  const Report = sequelize.define('report', {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    category: {
      type: Sequelize.STRING,
    },
  })

  return Report
}

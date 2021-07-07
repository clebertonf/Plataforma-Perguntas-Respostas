const Respostas = (sequelize, DataTypes) => {
  const Resposta = sequelize.define('Respostas', {
    questionId: DataTypes.INTEGER,
    answers: DataTypes.TEXT,
  });

  Resposta.associate = (models) => {
    Resposta.belongsTo(models.Perguntas, { as: 'Perguntas', foreignKey: 'questionId' });
  };
  return Resposta;
};

module.exports = Respostas;

const Perguntas = (sequelize, DataTypes) => {
  const Pergunta = sequelize.define('Perguntas', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
  });

  return Pergunta;
};

module.exports = Perguntas;

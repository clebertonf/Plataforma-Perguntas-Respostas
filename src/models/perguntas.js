const Perguntas = (sequelize, DataTypes) => {
  const Pergunta = sequelize.define('Pergunta', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
  });

  return Pergunta;
};

module.exports = Perguntas;

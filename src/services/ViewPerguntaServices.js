const { Pergunta } = require('../models/index');

const createQuestion = async (titulo, descricao) => {
  try {
    const response = await Pergunta.create({ titulo, descricao });
    if (response) return true;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createQuestion,
};

const { Perguntas } = require('../models/index');

const listQuestions = async () => {
  try {
    const perguntas = await Perguntas.findAll({
      raw: true,
      order: [
        ['id', 'DESC'],
      ],
    });
    return perguntas;
  } catch (error) {
    console.log(error);
  }
};

const createQuestion = async (title, description) => {
  try {
    const response = await Perguntas.create({ title, description });
    if (response) return true;
  } catch (error) {
    console.log(error);
  }
};

const findQuestionById = async () => {
  try {
    const response = await Perguntas.findByPk(57);
    return response;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createQuestion,
  listQuestions,
  findQuestionById,
};

const { Respostas } = require('../models/index');

const createAnswer = async (questionId, answers) => {
  const response = await Respostas.create({ questionId, answers });
  if (response) return true;
};

module.exports = {
  createAnswer,
};

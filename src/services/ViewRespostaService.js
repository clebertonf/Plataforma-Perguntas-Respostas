const { Respostas } = require('../models/index');

const createAnswer = async (questionId, answers) => {
  const response = await Respostas.create({ questionId, answers });
  if (response) return true;
};

const listAnswers = async (questionId) => {
  const response = await Respostas.findAll({
    where: { questionId },
    raw: true,
    order: [
      ['id', 'DESC'],
    ],
  }, {
  });

  return response;
};

module.exports = {
  createAnswer,
  listAnswers,
};

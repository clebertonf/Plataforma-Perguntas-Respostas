const { createAnswer: createAnswerBank } = require('../services/ViewRespostaService');

const createAnswer = async (req, resp) => {
  const { questionId, answer: answers } = req.body;
  const response = await createAnswerBank(questionId, answers);
  if (response) return resp.redirect(`/pergunta/${questionId}`);
};

module.exports = {
  createAnswer,
};

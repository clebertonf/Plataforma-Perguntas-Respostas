const { createQuestion: createQuestionBank } = require('../services/ViewPerguntaServices');

const viewPergunta = (_req, resp) => {
  resp.status(200).render('../src/views/formPergunta', {});
};

const createQuestion = async (req, resp) => {
  const { title, description } = req.body;
  const response = await createQuestionBank(title, description);
  if (response) return resp.render('../src/views/formPergunta', {});
};

module.exports = {
  viewPergunta,
  createQuestion,
};

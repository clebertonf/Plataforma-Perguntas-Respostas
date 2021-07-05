const { createQuestion: createQuestionBank } = require('../services/ViewPerguntaServices');

const viewPergunta = (_req, resp) => {
  resp.status(200).render('../src/views/formPergunta', {});
};

const createQuestion = async (req, resp) => {
  const { titulo, descricao } = req.body;
  const response = await createQuestionBank(titulo, descricao);
  if (response) return resp.status(201).redirect('/');
};

module.exports = {
  viewPergunta,
  createQuestion,
};

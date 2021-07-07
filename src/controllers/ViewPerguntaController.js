const {
  createQuestion: createQuestionBank,
  listQuestions: listQuestionsBank, findQuestionById: findQuestionBankId,
} = require('../services/ViewPerguntaServices');

const { listAnswers } = require('../services/ViewRespostaService');

const listQuestions = async (_req, resp) => {
  const response = await listQuestionsBank();
  resp.status(200).render('../src/views/index', { response });
};

const viewPergunta = (_req, resp) => {
  resp.status(200).render('../src/views/formPergunta', {});
};

const createQuestion = async (req, resp) => {
  const { title, description } = req.body;
  if (!title && !description) return resp.redirect('/');
  const response = await createQuestionBank(title, description);
  if (response) resp.redirect('/');
};

const findQuestionById = async (req, resp) => {
  const { id } = req.params;
  const answers = await listAnswers(id);

  const response = await findQuestionBankId(id);
  if (!response) return resp.redirect('/');
  resp.status(200).render('../src/views/resposta', { response, answers });
};

module.exports = {
  viewPergunta,
  createQuestion,
  listQuestions,
  findQuestionById,
};

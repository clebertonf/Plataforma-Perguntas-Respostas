const {
  createQuestion: createQuestionBank,
  listQuestions: listQuestionsBank, findQuestionById: findQuestionBankId,
} = require('../services/ViewPerguntaServices');

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
  const response = await findQuestionBankId(id);
  console.log(response);
};

module.exports = {
  viewPergunta,
  createQuestion,
  listQuestions,
  findQuestionById,
};

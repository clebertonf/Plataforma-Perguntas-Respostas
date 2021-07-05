const viewPergunta = (req, resp) => {
  resp.status(200).render('../src/views/formPergunta', {});
};

module.exports = {
  viewPergunta,
};

const viewContoller = (req, resp) => {
  resp.status(200).render('../src/views/index', {});
};

module.exports = {
  viewContoller,
};

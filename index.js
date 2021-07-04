const app = require('express')();
require('dotenv').config();

app.set('view engine', 'ejs');

app.get('/', (_req, resp) => {
  resp.status(200).render('../src/views/index');
});

app.listen(3000, () => console.log(`Online na porta ${process.env.PORT}`));

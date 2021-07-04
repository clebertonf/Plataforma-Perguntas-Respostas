const express = require('express');

const app = express();
require('dotenv').config();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.get('/', (_req, resp) => {
  resp.status(200).render('../src/views/index', {});
});

app.get('/pergunta', (_req, resp) => {
  resp.status(200).render('../src/views/formPergunta.ejs');
});

app.post('/pergunta', (req, resp) => {
  const { titulo, descricao } = req.body;
  resp.status(201).send({ titulo, descricao });
});

app.listen(3000, () => console.log(`Online na porta ${process.env.PORT}`));

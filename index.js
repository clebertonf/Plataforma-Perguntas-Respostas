const express = require('express');

const app = express();
require('dotenv').config();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (_req, resp) => {
  resp.status(200).render('../src/views/index', {});
});

app.listen(3000, () => console.log(`Online na porta ${process.env.PORT}`));

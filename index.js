const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));

app.use(require('./src/routers/index'));

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.listen(PORT, () => console.log(`Online na porta ${PORT || 3000}`));

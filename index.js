const express = require('express');

const app = express();
require('dotenv').config();

app.use(express.urlencoded({ extended: false }));

app.use(require('./src/routers/index'));

app.use(express.static('public'));
//app.set('views', './views');
app.set('view engine', 'ejs');

app.listen(3000, () => console.log(`Online na porta ${process.env.PORT || 3000}`));

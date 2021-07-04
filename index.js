const app = require('express')();
require('dotenv').config();

app.get('/', (_req, resp) => {
    resp.status(200).json('OK')
});

app.listen(3000, ()=> console.log(`Online na porta ${process.env.PORT}`));
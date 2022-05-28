import express from 'express';
import handleMiddleware from './middlewares/handleMiddleware';

const app = express();
const routes = require("./routes");

app.use(express.json());
app.use(routes);
app.use(handleMiddleware);

app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000');
  }
);
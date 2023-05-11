import express from 'express';
import bodyParser from 'body-parser';
import AppDataSource from './config/ormconfig';

require('dotenv').config();

const app = express();
app.use(bodyParser);
const port = parseInt(process.env.PORT || '4000', 10);

AppDataSource.initialize()
  .then(() => {})
  .catch((error) => {
    console.log(error);
  });

app.listen(port, () => {
  console.log('Server Running at port 5000');
});

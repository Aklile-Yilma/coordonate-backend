import express from 'express';

const app = express();

let x = 1;

app.listen('5000', () => {
  console.log('Server Running at port 5000');
});

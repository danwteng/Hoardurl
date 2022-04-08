const express = require("express");
const path = require("path");
const router = require('./router');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../build')));

app.use('/hoarding', router);

app.use('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../build/index.html'))
})


//Unknown Route Handler
app.use((req, res) => res.sendStatus(404))

//Global Error Handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { 'err' : 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
    console.log(`SERVER LISTENING ON PORT: ${PORT}`);
  });

module.exports = app
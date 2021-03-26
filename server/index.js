require('dotenv').config()
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const validator = require('validator');
const passwordValidator = require('password-validator');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

const schema = new passwordValidator();
schema
  .is().min(8)
  .is().max(100)
  .has().uppercase()
  .has().lowercase()
  .has().digits(1)
  .has().not().spaces();

app.post('/register', (req, res) => {
  if(validator.isEmail(req.body.email)){
    if (schema.validate(req.body.password)) {
      res.json({
        res: "200 - OK"
      })
    }else{
      res.json({
        error: "401 - password"
      });
    }
  }else{
    res.json({
      error: "401 - email"
    });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
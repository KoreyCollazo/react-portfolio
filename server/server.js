const express = require('express')
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const port = 3001
const sendemail = require('./mailer/index')


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

app.post('/', async (req, res) => {
  try {
    console.log("hello")
    const userData = await (req.body);
    console.log("sending email")
      sendemail(userData.name, userData.email, userData.message);
  } catch (err) {
    res.status(400).json(err);
  }
});

app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port}`)
})
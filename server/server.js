const path = require('path');
const express = require('express')
const bodyParser = require('body-parser');
const sendemail = require('./mailer/index')
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

app.post('/', async (req, res) => {
  try {
    const userData = await (req.body);
    res.status(200).json(userData);
      sendemail(userData.name, userData.email, userData.message);
  } catch (err) {
    res.status(400).json(err);
  }
});

app.listen(PORT, () => {
  console.log(`server is listening at http://localhost:${PORT}`)
})
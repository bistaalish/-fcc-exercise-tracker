const express = require('express')
const app = express()
const cors = require('cors')
const apiRoutes = require('./routes/apiRoutes');
const bodyParser = require('body-parser')
require('dotenv').config()
const mongoose = require('mongoose');
// MongoDB and mongoose connect
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});


// Adding routes
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api",apiRoutes)

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})

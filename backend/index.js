const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const vendorRoutes = require('./routes/vendorRoutes');
const bodyParser = require('body-parser');
const firmRoutes = require('./routes/firmRoutes');


const app = express();
const port = 3000;

dotenv.config();


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));



app.use(bodyParser.json());
app.use('/vendor', vendorRoutes);
app.use('/firm', firmRoutes);


app.listen(port, () => {
  console.log(`server started`);
});

app.get('/', (req, res) => {
  res.send('Helo World!');
});

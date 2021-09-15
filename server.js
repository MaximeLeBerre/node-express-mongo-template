require('dotenv').config()
const express =require('express');
const mongoose = require('mongoose');
const app = express();
const WildersRoutes = require('./routes/wilders');

mongoose.connect(process.env.DB_PORT, {useNewUrlParser: true })
    .then(() => console.log("Connected to Mongo database 🌿"))
    .catch(err => console.log(err));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api/wilder', WildersRoutes);

app.listen(process.env.PORT, () => console.log(`SERVER IS RUNNING ON PORT : ${process.env.PORT} ✅  `) );
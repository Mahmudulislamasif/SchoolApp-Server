const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');


app.use(express.json());
app.use(cors());


const resourceRoute=require('./routes/resource.route')

app.get("/", (req, res) => {
 res.send('it is working')
});



//posting 
app.use('/resources',resourceRoute)
// get data
app.use('/resources',resourceRoute)

module.exports = app;
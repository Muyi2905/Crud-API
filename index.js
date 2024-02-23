const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const app = express();
const port = 5000;

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("hello")
})

mongoose.connect('mongodb://localhost:27017/Crud', {
    useNewurlparser: true,
    useUnifiedtopology: true
})


app.listen(port, () => {
    console.log(`server is listening on ${port}`)
})
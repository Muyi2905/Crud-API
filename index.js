
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send("hello")
})

mongoose.connect('mongodb://localhost:27017/Crud', {
    useNewurlparser: true,
    useUnifiedtopology: true
})

const peopleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true }
});

const People = mongoose.model(People, peopleSchema)

app.listen(port, () => {
    console.log(`server is listening on ${port}`)
})
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
<<<<<<< HEAD
const port = 5000;

app.use(bodyParser.json())
=======
const port = 3000;
>>>>>>> 96fb26e4d68477010e03856603d36bb446773442

app.get('/', (req, res) => {
    res.send("hello")
})

mongoose.connect('mongodb://localhost:27017/Crud', {
    useNewurlparser: true,
    useUnifiedtopology: true
})

const peopleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true }, 
    occupation: {type : String, required: true}
});

const People = mongoose.model('People', peopleSchema)

app.listen(port, () => {
    console.log(`server is listening on ${port}`)
})
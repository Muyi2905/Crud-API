import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';


const app = express();
const port = 5000;

app.use(bodyParser.json())
app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    res.send("hello")
})

// mongoose.connect('mongodb://localhost:27017/Crud', {
//     useNewurlparser: true,
//     useUnifiedtopology: true
// })


app.listen(port, () => {
    console.log(`server is listening on ${port}`)
})
// console.log('Task Manager App')
// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();

// mongoose.connect('mongodb://localhost:27017/taskmanager').then(() => {
//     console.log('Mongodb successfully connected');
// });   
const connectDB = require('./db/connect');
const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
require('dotenv').config();
// middleware
// to let express know the static data is in public folder
app.use(express.static('./public'))
// to have the data in req.body
app.use(express.json())

// routes
app.get('/ ', (req, res) => {
    res.send('Task Manager App')
})
app.use('/api/v1/tasks', tasks);
const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGOURI)
        app.listen(port, console.log(`Server is listening on port ${port} and DB is working`))

    } catch(error) {
        console.log(error)
    }
}

start()


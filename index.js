const express = require('express');
const cors = require('cors');
const app = express(); // framework express tao sever
const mongoose = require('mongoose'); // giup thao tac voi db de dang
const morgan = require('morgan'); // 
const dotenv = require('dotenv');
var bodyParser = require('body-parser');
const authorRouter = require('./routes/author');
const bookRouter = require('./routes/book');


dotenv.config();
//CONNECT DATABASE 
mongoose.connect((process.env.MONGODB_URL),() => {
    console.log("Connected to MongoDB");
});

app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan('common'));


//ROUTER
app.use("/v1/author",authorRouter);
app.use("/v1/book",bookRouter);




app.listen(8000,() => {
    console.log("Server is running...");
});

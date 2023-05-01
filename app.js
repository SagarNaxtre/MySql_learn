const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const route = require("./routes/product/index");

const PORT = process.env.PORT || 4200;
const SERVER = process.env.SERVER || "http://localhost";

const app = express();

app.use((bodyParser.urlencoded({ extended: false })));
app.use((bodyParser.json()));
app.use(cors());



app.use('/', route);


app.listen(PORT, () => {
    console.log(`Application is runnuing at ${SERVER}:${PORT}🚀`);
});

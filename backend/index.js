"use strict";

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { currencyRoute } = require('./routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', currencyRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is listening to port ${port}`));
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const router = require('./router');

const app = express();
const port = 3000;

// parsing requests to objects
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));
app.use(cors());
app.use('/api', router);

app.get('/name', (req, res) => res.send('TING!!!'))

app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.listen(port, () => console.log(`Server listening on port ${port}!!!`));

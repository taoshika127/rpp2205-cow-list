const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;
const { getHandler, postHandler } = require('./requestHandler');

// Middleware
var morgan = require('morgan');
//morgan middleware will enable the request to log into the console.
var cors = require('cors');

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/', router);

router.get('/', (req, res) => {
  getHandler(req, res);
});
router.post('/', postHandler);

app.listen(port, () => {
  console.log('listening on port 3000...');
})
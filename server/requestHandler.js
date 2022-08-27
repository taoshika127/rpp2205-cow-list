var db = require('./db/index').connection;

var getHandler = (req, res) => {
  var query = 'SELECT * FROM cows';
  db.query(query, (err, result) => {
    if(err) {
      console.error(err);
    } else {
      res.send(result);
    }
  })
}

var postHandler = (req, res) => {
  var name = req.body.name;
  var description = req.body.description;
  var query = `INSERT INTO cows (name, description) VALUES ('${name}', '${description}');`
  db.query(query, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ name, description });
    }

  })

}

module.exports = { getHandler, postHandler };
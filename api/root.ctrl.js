const mysqlPool = require('./database/mysql_db.js');

const control = {
  rootGet: (req, res) => {
    console.log(req);
    res.status(201).send('Hello from Home');
  },
  rootPost: (req, res) => {
    mysqlPool.getConnection((err, conn) => {
      if (!err) {
        query = `INSERT INTO info (username, password) VALUES ?`;
        values = [[req.body.userName, req.body.passWord]];
        const c = conn.query(query, [values], (err, rows) => {
          if (!err) {
            res.status(201).send({ message: 'Successfully Created' });
          } else {
            res
              .status(403)
              .send({ message: 'Record Creation Failed', error: err.message });
          }
        });
        console.log(req.body);
        console.log(c);
        conn.release();
      } else {
        res
          .stauts(500)
          .send({ message: 'Internal Server Error', error: err.message });
      }
    });
  },
};
module.exports = control;

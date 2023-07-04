const db = require("../database");

module.exports = {

    getAllTeachers :function (req, res) {
        db.query("SELECT * FROM teachers", (err, items, fields) => {
          if (err) {
            res.status(500).send(err);
          } else {
            res.status(200).send(items);
          }
        });
      },
    insertTeacher: function(req, res) {
        db.query("insert into teachers (name,email,password) values(?,?,?)",[req.body.name,req.body.email,req.body.password], (err, items, fields) => {
            if (err) {
              res.status(500).send(err);
            } else {
              res.status(200).send(items);
            }
          });
    },
    updateTeacher: function(req, res) {
        db.query('update teachers set name =? , email=? , password=? where idteacher =?',[req.body.name,req.body.email,req.body.password,req.params.idteacher], (err, items, fields) => {
            if (err) {
              res.status(500).send(err);
            } else {
              res.status(200).send(items);
            }
          });
    },
    deleteTeacher: function(req, res) {
        db.query('delete from teachers  where idteacher =?',[req.params.idteacher], (err, items, fields) => {
            if (err) {
              res.status(500).send(err);
            } else {
              res.status(200).send(items);
            }
          });
    },
}
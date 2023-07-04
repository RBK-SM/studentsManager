const db = require("../database");

module.exports = {

    getAllStudents :function (req, res) {
        db.query("SELECT * FROM students", (err, items, fields) => {
          if (err) {
            res.status(500).send(err);
          } else {
            res.status(200).send(items);
          }
        });
      },
    insertStudents: function(req, res) {
        db.query("insert into students set name=? ,gender=? ,phone=? ,email=? ,attendance=? ,image=? ,teachers_idteacher=?",[req.body.name,req.body.gender,req.body.phone,req.body.email,req.body.attendance,req.body.image,req.params.teachers_idteacher], (err, items, fields) => {
            if (err) {
              res.status(500).send(err);
            } else {
              res.status(200).send(items);
            }
          });
    },
    updateStudents: function(req, res) {
        db.query('update students set name=?,gender=?,phone=?,email=?,attendance=?,image=?,teachers_idteacher=? where idstudents =?',[req.body.name,req.body.gender,req.body.phone,req.body.email,req.body.attendance,req.body.image,req.params.teachers_idteacher,req.params.idstudents], (err, items, fields) => {
            if (err) {
              res.status(500).send(err);
            } else {
              res.status(200).send(items);
            }
          });
    },
    deleteStudents: function(req, res) {
        db.query('delete from students  where idstudents =?',[req.params.idstudents], (err, items, fields) => {
            if (err) {
              res.status(500).send(err);
            } else {
              res.status(200).send(items);
            }
          });
    },
}
const db = require("../database");

module.exports = {

    getAllGrades :function (req, res) {
        db.query("SELECT * FROM grades", (err, items, fields) => {
          if (err) {
            res.status(500).send(err);
          } else {
            res.status(200).send(items);
          }
        });
      },
  getOneGrades :function (req, res) {
        db.query("SELECT * FROM grades where subject=?",[req.params.subject], (err, items, fields) => {
          if (err) {
            res.status(500).send(err);
          } else {
            res.status(200).send(items);
          }
        });
      },
    insertGrades: function(req, res) {
        db.query("insert into grades set subject=? ,score=? ,students_idstudents=?",[req.body.subject,req.body.score,req.params.students_idstudents], (err, items, fields) => {
            if (err) {
              res.status(500).send(err);
            } else {
              res.status(200).send(items);
            }
          });
    },
    updateGrades: function(req, res) {
        db.query('update grades set subject=? ,score=?,students_idstudents=? where idgrades =?',[req.body.subject,req.body.score,req.params.students_idstudents,req.params.idgrades], (err, items, fields) => {
            if (err) {
              res.status(500).send(err);
            } else {
              res.status(200).send(items);
            }
          });
    },
    deleteGrades: function(req, res) {
        db.query('delete from students  where idgrades =?',[req.params.idgrades], (err, items, fields) => {
            if (err) {
              res.status(500).send(err);
            } else {
              res.status(200).send(items);
            }
          });
    },
}
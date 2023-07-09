const db = require("../database");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const config = require("../config/index.js")
const SECRET_KEY = config.SECRET_KEY

module.exports = {
  //method to fetch all posts from the blog database.
  getAllTeachers: function (req, res) {
    db.query("SELECT * FROM teachers", (err, items, fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(items);
      }
    });
  },

  getOneTeachers :function (req, res) {
    db.query("SELECT * FROM teachers where name=?",[req.params.name], (err, items, fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(items);
      }
    });
  },

  insertTeacher: function (req, res) {
    db.query("insert into teachers (name,email,password) values(?,?,?)", [req.body.name, req.body.email, req.body.password], (err, items, fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(items);
      }
    });
  },
  updateTeacher: function (req, res) {
    db.query('update teachers set name =? , email=? , password=? where idteacher =?', [req.body.name, req.body.email, req.body.password, req.params.idteacher], (err, items, fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(items);
      }
    });
  },
  deleteTeacher: function (req, res) {
    db.query('delete from teachers  where idteacher =?', [req.params.idteacher], (err, items, fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(items);
      }
    });
  },
  registerTeacher: (req, res) => {
    let { email, password, password_repeat, name } = req.body
    //creating teacher object
    const teacher = {
      email,
      password,
      name
    }

    if (!name) {
      return res.status(400).send({
        msg: 'name should not be empty'
      });
    }

    //validate teacher and the information provided by them
    if (!email) {
      return res.status(400).send({
        msg: 'Please enter valid email id'
      });
    }

    // password min 6 chars
    if (!password || password.length < 6) {
      return res.status(400).send({
        msg: 'Password must be at least 6 characters'
      })
    }

    // password (repeat) does not match
    if (!password_repeat || password != password_repeat) {
      return res.status(400).send({
        msg: "Password doesn't match"
      })
    }


    db.query(`SELECT * FROM teachers WHERE email=?`, email, (err, result) => {

      if (err) {
        return res.status(400).send(err)
      }

      //check if email already exist or not
      if (result.length !== 0) {
        return res.status(409).send({
          msg: 'This email is already in use!'
        })
      }
      // email is available
      bcrypt.hash(password, 8).then((hashed) => {
        //set the password to hash value
        teacher.password = hashed

      }).then(() => {
        db.query("INSERT INTO teachers SET ?", teacher, (err, result) => {
          if (err) {
            return res.status(400).send({
              msg: err
            })
          }



          db.query('SELECT * FROM teachers WHERE email=?', email, (err, result) => {
            if (err) {
              return res.status(400).send({
                msg: err
              })
            }

            return res.status(201)
              .send({
                teacherdata: teacher,
                msg: "successfully registered"
              })
          })

        })
      })
    });
  },
  loginTeacher: (req, res) => {
    const { email, password } = req.body

    if (req.body.email === '' || req.body.password === '') {
      return res.status(400).send({ msg: "email or password must not be empty" })

    }

    db.query("SELECT * FROM teachers WHERE email=?", email, (err, result) => {

      if (err) {
        return res.status(400).send({
          msg: err
        })
      }

      //check whether the teacher with that email exists or not
      if (result.length === 0) {
        return res.status(401).send({
          msg: 'email or password is incorrect'
        })
      }

      //check password
      bcrypt.compare(password, result[0].password).then(isMatch => {
        if (isMatch === false) {
          return res.status(401).send({
            msg: "Invalid credentials"
          })
        }

        //generate token
        const id = result[0].idteacher
        const token = jwt.sign(id, SECRET_KEY)
        return res.status(200).send({
          msg: "logged in successfully",
          teacher: result[0],
          token
        })
      })
    })
  }
}
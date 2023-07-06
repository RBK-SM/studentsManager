const jwt = require('jsonwebtoken');
const config = require("../config/index.js")
const SECRET_KEY=config.SECRET_KEY


const  verifyToken=(req, res, next) =>{
    const token = req.header('Authorization')
    console.log(token)
    if (!token) {
      return res.status(403).json({ error: 'Access denied' })
    }
  
    jwt.verify(token, SECRET_KEY, (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ error: 'Invalid token' })
      }
      req.user = decodedToken
      next();
    });
  }

  module.exports = verifyToken
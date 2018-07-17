const jwt = require('jsonwebtoken')
require('dotenv').config();

exports.GEN_TOKEN = (user) => {
  const token = jwt.sign({
    sub: user._id,
    username: user.email,
    role: user.role
  }, 
  process.env.TOKEN_SECRET,
  {expiresIn: '48 hours'
}
  );
  return token;
}

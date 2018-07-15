const moongose = require('mongoose');
const Schema   = moongose.Schema;
const PLM      = require('passport-local-mongoose');

const userSchema = new Schema({
  username: String,
  email:    String,
  fullname: String,
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user'
  }
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

userSchema.plugin(PLM, {usernameField: 'email'});

module.exports = moongose.model('User', userSchema);
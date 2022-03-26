const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs')

const UserSchema = new Schema({
    first_name: { type: String, required: true},
    last_name: { type: String, required: true},
    hospital: { type: String, required: true},
    service: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    confirm_password: { type: String, required: true},
    date: { type: Date, default: Date.now }
});

UserSchema.methods.encryptPassword = async (password) =>{
   const salt = await bcrypt.genSalt(10);
   const hash = bcrypt.hash(password, salt);
   return hash;
};

UserSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);
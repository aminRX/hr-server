
require('dotenv').config();
const {User} = require('./src/model');

User.create({
  firstName: 'admin',
  lastName: 'admin',
  email: 'admin@admin.com',
  password: '123123',
  role: 'admin'
}).then((user) => {
  console.log(`user.email ${user.email} created.`)
}).catch((error) => {
  console.log(error)
})
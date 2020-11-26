const mongoose = require('mongoose')

const MessageSchema = mongoose.Schema({
userPhoneNumber: Number,
sendToPhoneNumber: Number,
message: String,
dateAndTimeToSend: String,
active: Boolean
})


module.exports = mongoose.model('Message', MessageSchema)
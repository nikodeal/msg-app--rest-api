const express = require("express");
const Message = require("../models/Message");
const messageController = require("../controllers/message-controller");
const HttpError = require("../models/http-error");

const router = express.Router();
router.get('/', (req, res)=> res.send('hello world'))
router.get("/:userNumber", messageController.getMessages);
router.get('/message/:messageId' ,messageController.getOneMessage )
router.delete('/message/:messageId' ,messageController.deleteMessage )
router.patch('/message/:messageId',messageController.editMessage)
router.post("/add", messageController.saveMessage);

module.exports = router;

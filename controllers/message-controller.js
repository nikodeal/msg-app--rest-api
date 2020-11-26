const Message = require("../models/Message");
const HttpError = require("../models/http-error");

const getMessages = async (req, res, next) => {
  try {
    const messages = await Message.find({
      userPhoneNumber: req.params.userNumber,
    });
    res.json(messages);
  } catch (err) {
    const error = new HttpError(
      "fetching messages failed, please try again.",
      500
    );
    return next(error);
  }
};

const getOneMessage = async (req, res, next) => {
  try {
    const message = await Message.findById(req.params.messageId);
    res.json(message);
  } catch (err) {
    const error = new HttpError(
      "fetching single message failed, please try again.",
      500
    );
    return next(error);
  }
};
const deleteMessage = async (req, res, next) => {
  try {
    const removedPost = await Message.deleteOne({ _id: req.params.messageId });
    res.json(removedPost);
  } catch (err) {
    const error = new HttpError(
      "deleting message failed, please try again.",
      500
    );
    return next(error);
  }
};
const editMessage = async (req, res, next) => {
  try {
    const removedPost = await Message.updateOne(
      { _id: req.params.messageId },
      {
        $set: {
          sendToPhoneNumber: req.body.sendToPhoneNumber,
          message: req.body.message,
          dateAndTimeToSend: req.body.dateAndTimeToSend,
          active: req.body.active,
        },
      }
    );
    res.json(removedPost);
  } catch (err) {
    const error = new HttpError(
      "updating message failed, please try again.",
      500
    );
    return next(error);
  }
};
const saveMessage = async (req, res, next) => {
  const message = new Message({
    userPhoneNumber: req.body.userPhoneNumber,
    sendToPhoneNumber: req.body.sendToPhoneNumber,
    message: req.body.message,
    dateAndTimeToSend: req.body.dateAndTimeToSend,
    active: req.body.active,
  });
  try {
    const savedMessage = await message.save();
    res.json(savedMessage);
  } catch (err) {
    const error = new HttpError(
      "saving message failed, please try again.",
      500
    );
    return next(error);
  }
};
exports.getMessages = getMessages;
exports.saveMessage = saveMessage;
exports.getOneMessage = getOneMessage;
exports.deleteMessage = deleteMessage;
exports.editMessage = editMessage;

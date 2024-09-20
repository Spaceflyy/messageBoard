const { Router } = require("express");
const indexRouter = Router();
const messageController = require("../controllers/messageController");

indexRouter.get("/", (req, res) => {
	res.render("index", { messages: messageController.getMessages() });
});

module.exports = indexRouter;

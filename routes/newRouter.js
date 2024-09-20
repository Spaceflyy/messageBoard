const { Router } = require("express");
const newRouter = Router();
const messageController = require("../controllers/messageController");
newRouter.get("/", (req, res) => {
	res.render("form");
});

newRouter.post("/", (req, res) => {
	messageController.newMessage(req);

	res.redirect("/");
});

module.exports = newRouter;

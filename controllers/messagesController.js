const db = require("../db/queries");

exports.getUserMessages = async (req, res) => {
	const messages = await db.getAllMessages();
	res.render("index", {
		messages: messages,
		single: false,
	});
};

exports.findMessage = async (req, res) => {
	const messages = await db.getAllMessages();
	const { msgId } = req.params;

	res.render("index", {
		messages: [messages[msgId]],
		single: true,
	});
};

exports.addMessage = async (req, res) => {
	const newMessage = {
		title: req.body.title,
		text: req.body.message,
		username: req.body.user,
	};

	await db.insertMessage(newMessage);
	res.redirect("/");
};

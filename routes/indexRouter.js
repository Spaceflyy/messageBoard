const { Router } = require("express");

const indexRouter = Router();

let messages = [
	{
		id: 0,
		title: "Something to say",
		text: "Hi there!",
		user: "Amando",
		added: new Date().toString().slice(0, 21),
	},
	{
		id: 1,
		title: "An important update!",
		text: "Hello World!",
		user: "Charles",
		added: new Date().toString().slice(0, 21),
	},
];

indexRouter.get("/", (req, res) => {
	res.render("index", { messages: messages });
});

indexRouter.get("/:id", (req, res) => {
	const msgId = req.params.id;
	res.render("index", { messages: [messages[msgId]] });
});

indexRouter.post("/new", (req, res) => {
	messages.push({
		id: messages.length,
		title: req.body.title,
		text: req.body.message,
		user: req.body.user,
		added: new Date().toString().slice(0, 21),
	});
	res.redirect("/");
});

module.exports = indexRouter;

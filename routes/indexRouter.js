const { Router } = require("express");
const router = Router();

let messages = [
	{
		msgId: 0,
		title: "Something to say",
		text: "Hi there!",
		user: "Amando",
		added: new Date().toString().slice(0, 21),
	},
	{
		msgId: 1,
		title: "An important update!",
		text: "Hello World!",
		user: "Charles",
		added: new Date().toString().slice(0, 21),
	},
];

router.get("/", (req, res) => {
	res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/messages/:msgId", (req, res, next) => {
	const { msgId } = req.params;
	res.render("index", {
		messages: [messages[msgId]],
	});
});

router.post("/new", (req, res) => {
	messages.push({
		msgId: messages.length,
		title: req.body.title,
		text: req.body.message,
		user: req.body.user,
		added: new Date().toString().slice(0, 21),
	});
	res.redirect("/");
});

module.exports = router;

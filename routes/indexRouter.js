const { Router } = require("express");
const indexRouter = Router();

let messages = [
	{
		title: "Something to say",
		text: "Hi there!",
		user: "Amando",
		added: new Date().toString().slice(0, 21),
	},
	{
		title: "An important update!",
		text: "Hello World!",
		user: "Charles",
		added: new Date().toString().slice(0, 21),
	},
];

indexRouter.get("/", (req, res) => {
	res.render("index", { messages: messages });
});

module.exports = indexRouter;

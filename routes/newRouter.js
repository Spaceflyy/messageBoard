const { Router } = require("express");
const newRouter = Router();

newRouter.get("/", (req, res) => {
	res.render("form");
});

newRouter.post("/", (req, res) => {
	messages.push({
		title: req.body.title,
		text: req.body.message,
		user: req.body.user,
		added: new Date().toString().slice(0, 21),
	});
	res.redirect("/");
});

module.exports = newRouter;

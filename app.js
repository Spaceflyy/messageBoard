const express = require("express");
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
const app = express();
const PORT = 3030;

let messages = [
	{
		text: "Hi there!",
		user: "Amando",
		added: new Date().toString().slice(0, 24),
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: new Date().toString().slice(0, 24),
	},
];
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.render("index", { messages: messages });
});

app.get("/new", (req, res) => {
	res.render("form");
});

app.post("/new", (req, res) => {
	messages.push({
		text: req.body.message,
		user: req.body.user,
		added: new Date().toString().slice(0, 24),
	});
	res.redirect("/");
});

app.listen(PORT, () => {
	console.log(`Listening on http://localhost:${PORT}`);
});

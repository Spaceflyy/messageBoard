const express = require("express");
const path = require("node:path");

const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/new", newRouter);
app.use("/", indexRouter);
app.get("*", (req, res) => {
	app.send("404");
});

const PORT = 3030;
app.listen(PORT, () => {
	console.log(`Listening on http://localhost:${PORT}`);
});

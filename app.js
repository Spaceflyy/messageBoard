const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");

const { title } = require("node:process");
const assetsPath = path.join(__dirname, "public");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/new", newRouter);

const PORT = 3030;
app.listen(PORT, () => {
	console.log(`Listening on http://localhost:${PORT}`);
});

const express = require("express");
const app = express();
const PORT = 3030;
app.get("/", (req, res) => {
	res.send("Hello world");
});

app.listen(PORT, () => {
	console.log(`Listening on http://localhost:${PORT}`);
});

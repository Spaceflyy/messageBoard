const pool = require("./pool");

async function getAllMessages() {
	const { rows } = await pool.query("SELECT * FROM messages");
	console.log(rows);
	return rows;
}

async function insertMessage(message) {
	const { title, text, username } = message;

	await pool.query(
		"INSERT INTO messages (title,text,username) VALUES ($1,$2,$3) ",
		[title, text, username]
	);
}

module.exports = {
	getAllMessages,
	insertMessage,
};

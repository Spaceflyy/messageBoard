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

module.exports = {
	getMessages: () => {
		return messages;
	},

	newMessage: (req, res) => {
		messages.push({
			title: req.body.title,
			text: req.body.message,
			user: req.body.user,
			added: new Date().toString().slice(0, 21),
		});
		console.log(messages);
	},
};

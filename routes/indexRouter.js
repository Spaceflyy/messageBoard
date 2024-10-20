const { Router } = require("express");
const router = Router();
const messagesController = require("../controllers/messagesController");
router.get("/", messagesController.getUserMessages);
router.get("/messages/:msgId", messagesController.findMessage);
router.post("/new", messagesController.addMessage);

router.use((err, req, res, next) => {
	console.error(err);
	res.status(404).render("404");
});
module.exports = router;

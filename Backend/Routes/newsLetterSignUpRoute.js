const router = require("express").Router();
const NewsLetterSignUp = require("../Controller/newsLetterSignUpController");

router.post("/newsletter", NewsLetterSignUp.Post_newsLetterSignUp);
router.get("/newsletter", NewsLetterSignUp.get_newsLetterSignUp);
router.put("/newsletter/:id", NewsLetterSignUp.update_newsLetterSignUp);
router.delete("/newsletter/:id", NewsLetterSignUp.delete_newsLetterSignUp);

module.exports = router;

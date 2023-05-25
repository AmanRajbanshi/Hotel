const asyncHandler = require("../Middlewares/asyncHandler");
const NewsLetterSignUp = require("../Model/newsletterSignup");

module.exports.Post_newsLetterSignUp = asyncHandler(async (req, res) => {
  const newnewsLetterSignUp = new NewsLetterSignUp(req.body);
  try {
    const insertnewsLetterSignUp = await newnewsLetterSignUp.save();
    res.status(201).json({ success: true, message: insertnewsLetterSignUp });
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
});

module.exports.get_newsLetterSignUp = async (req, res) => {
  try {
    const getnewsLetterSignUp = await NewsLetterSignUp.find({});
    res.json({ success: true, message: getnewsLetterSignUp });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.getSingle_newsLetterSignUp = async (req, res) => {
  try {
    const newsLetterSignUp = await NewsLetterSignUp.findById(req.params.id);
    res.status(200).json({
      success: true,
      newsLetterSignUp,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.update_newsLetterSignUp = async (req, res) => {
  try {
    const _id = req.params.id;
    const updatenewsLetterSignUp = await NewsLetterSignUp.findByIdAndUpdate(
      { _id },
      req.body
    );
    res.json(updatenewsLetterSignUp);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

module.exports.delete_newsLetterSignUp = async (req, res) => {
  try {
    const _id = req.params.id;
    const deletenewsLetterSignUp = await NewsLetterSignUp.findByIdAndDelete({
      _id,
    });
    res.json(deletenewsLetterSignUp);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

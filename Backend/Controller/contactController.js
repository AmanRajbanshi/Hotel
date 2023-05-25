const asyncHandler = require("../Middlewares/asyncHandler");
const Contact = require("../Model/contactModel");

module.exports.Post_Contact = asyncHandler(async (req, res) => {
  const newContact = new Contact(req.body);
  try {
    const insertContact = await newContact.save();
    res.status(201).json(insertContact);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
});

module.exports.get_Contact = async (req, res) => {
  try {
    const getContact = await Contact.find({});
    res.json(getContact);
  } catch (error) {
    res.status(400).json(error);
    // console.log(error);
  }
};

module.exports.getSingle_Contact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    res.status(200).json({
      success: true,
      contact,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.update_Contact = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateContact = await Contact.findByIdAndUpdate({ _id }, req.body);
    res.json(updateContact);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

module.exports.delete_Contact = async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteContact = await Contact.findByIdAndDelete({ _id });
    res.json(deleteContact);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

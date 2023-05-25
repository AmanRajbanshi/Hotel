const asyncHandler = require("../Middlewares/asyncHandler");
const Reservation = require("../Model/reservationModel");

module.exports.Post_Reservation = asyncHandler(async (req, res) => {
  const newReservation = new Reservation(req.body);
  try {
    const insertReservation = await newReservation.save();
    res.status(201).json(insertReservation);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
});

module.exports.get_Reservation = async (req, res) => {
  try {
    const getReservation = await Reservation.find({});
    res.json(getReservation);
  } catch (error) {
    res.status(400).json(error);
    // console.log(error);
  }
};

module.exports.getSingle_Reservation = async (req, res) => {
  try {
    const Reservation = await Reservation.findById(req.params.id);
    res.status(200).json({
      success: true,
      Reservation,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.update_Reservation = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateReservation = await Reservation.findByIdAndUpdate(
      { _id },
      req.body
    );
    res.json(updateReservation);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

module.exports.delete_Reservation = async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteReservation = await Reservation.findByIdAndDelete({ _id });
    res.json(deleteReservation);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

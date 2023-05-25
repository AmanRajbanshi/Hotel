const mongoose = require("mongoose");
const reservationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    trim: true,
  },
  phNumber: {
    type: Number,
    required: [true, "phNumber is required"],
    trim: true,
  },

  email: {
    type: String,
    required: [true, "email is required"],
    trim: true,
  },
  checkIn: {
    type: Date,
    required: [true, "checkIn is required"],
    trim: true,
  },
  checkOut: {
    type: Date,
    required: [true, "checkOut is required"],
    trim: true,
  },
  adults: {
    type: String,
    enum: ["1", "2", "3", "4", "5"],
    default: "2",
    required: [true, "adults is required"],
    trim: true,
  },
  childs: {
    type: String,
    enum: ["1", "2", "3", "4", "5"],
    default: "2",
    required: [true, "childs is required"],
    trim: true,
  },
  noOfNights: {
    type: String,
    enum: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    default: "2",
    required: [true, "noOfNights is required"],
    trim: true,
  },
  noOfRooms: {
    type: String,
    enum: ["1", "2", "3", "4", "5"],
    default: "2",
    required: [true, "roomType is required"],
    trim: true,
  },
  roomType: {
    type: String,
    enum: ["Standard Room", "Deluxe Room", "Twin Room", "Mini Room"],
    default: "Standard Room",
    required: [true, "roomType is required"],
    trim: true,
  },
  address: {
    type: String,
    required: [true, "address is required"],
    trim: true,
  },
  orderNotes: {
    type: String,
    required: [true, "orderNotes is required"],
    trim: true,
  },
});

module.exports = mongoose.model("ReservationModel", reservationSchema);

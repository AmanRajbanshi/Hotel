const router = require("express").Router();
const Reservation = require("../Controller/reservationController");

router.post("/reservation", Reservation.Post_Reservation);
router.get("/reservation", Reservation.get_Reservation);
router.get("/reservation/:id", Reservation.getSingle_Reservation);
router.put("/reservation/:id", Reservation.update_Reservation);
router.delete("/reservation/:id", Reservation.delete_Reservation);

module.exports = router;

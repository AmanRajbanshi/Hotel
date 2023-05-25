import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Rooms from "./Components/Rooms";
import Reservation from "./Components/Reservation";
import Services from "./Components/Services";
import About from "./Components/About";
import Home from "./Components/Home";
import Overview from "./Components/Overview";
import GuestBook from "./Components/GuestBook";
import StandardRoom from "./Components/StandardRoom";
import DeluxeRoom from "./Components/DeluxeRoom";
import TwinRoom from "./Components/TwinRoom";
import MiniRoom from "./Components/MiniRoom";
import TopContent from "./Components/TopContent";
import Map from "./Components/Map";
import Footer from "./Components/Footer";
// import Button from "./Components/Button";
function App() {
  return (
    <>
      {/* <Button /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/standard_room" element={<StandardRoom />} />
          <Route path="/deluxe_room" element={<DeluxeRoom />} />
          <Route path="/twin_room" element={<TwinRoom />} />
          <Route path="/mini_room" element={<MiniRoom />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/guestbook" element={<GuestBook />} />
        </Routes>
        <div
          style={{
            position: "absolute",
            top: "10px",
            width: "100%",
            color: "white",
          }}
        >
          <TopContent />
        </div>
        <div style={{ position: "absolute", top: "100px", width: "100%" }}>
          <Navbar />
        </div>
        <Map />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

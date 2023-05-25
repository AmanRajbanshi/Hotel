import React from 'react'
import './carouselpage.css'
const CarouselOfHomePage = () => {
  return (
 <>
 <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active ">
      <img src="https://hotelasiatique.com.np/images/Home-4/slider.jpg" className="d-block w-100 carouselHeight
" alt="..."/>
     <div className="col centerText" style={{}}>
      <h1 className='centeredText'>Enjoy a Luxury Experience</h1>
      <h4 className='centeredSubText'>Hotel Asiatique Biratnagar</h4>
     </div>
    </div>
    <div className="carousel-item " >
      <img src="https://hotelasiatique.com.np/images/Home-4/slider-1.jpg" className="d-block w-100 carouselHeight" alt="..."/>
      <div className="col centerText" style={{}}>
      <h1 className='centeredText'>Contempory Yet Authentic</h1>
      <h4 className='centeredSubText'>With Great Amenities</h4>
     </div>
    </div>
    <div className="carousel-item ">
      <img src="https://hotelasiatique.com.np/images/Home-4/slider-2.jpg" className="d-block w-100 carouselHeight" alt="..."/>
      <div className="col centerText" style={{}}>
      <h1 className='centeredText'>Enjoy a Luxury Experience</h1>
      <h4 className='centeredSubText'> Hotel Asiatique Biratnagar</h4>

     </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
 </>
  )
}

export default CarouselOfHomePage
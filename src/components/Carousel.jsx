import React from 'react'
import img1 from '../assets/sp1.jpg'
import img2 from '../assets/sp2.jpg'
import img3 from '../assets/plum.jpg'
import leftArrow from '../assets/left arrow 1.svg'
import rightArrow from '../assets/right arrow 1.svg'

const Carousel = () => {
  return (
    <div className="carousel w-full mt-8">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={img1}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle"><img src={leftArrow} alt="left-arrow" /></a>
      <a href="#slide2" className="btn btn-circle"><img src={rightArrow} alt="right-arrow" /></a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={img2}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle"><img src={leftArrow} alt="left-arrow" /></a>
      <a href="#slide3" className="btn btn-circle"><img src={rightArrow} alt="right-arrow" /></a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={img3}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle"><img src={leftArrow} alt="left-arrow" /></a>
      <a href="#slide4" className="btn btn-circle"><img src={rightArrow} alt="right-arrow" /></a>
    </div>
  </div>
 
</div>
  )
}

export default Carousel
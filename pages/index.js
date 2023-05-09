import Link from "next/link";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import DatePicker from "../src/components/DatePicker";
import Layouts from "../src/layouts/Layouts";
import {
  bannerSlider,
  sponsorsSlider,
  testimonialSlider,
} from "../src/sliderProps";
import {FaUserGraduate} from 'react-icons/fa'
const Index = () => {
  const [date, setDate] = useState(null);
  const [date2, setDate2] = useState(null);
  return (
    <Layouts noBg extraCls={"ex"} headernumber>
      {/* Bnner Section */}
      <section className="banner-section">
        <div className="shape">
          <img src="assets/images/shape/shape-3.png" alt="" />
        </div>
        {/* <div className="big-title">Booking</div> */}
        <Swiper {...bannerSlider} className="swiper-container banner-slider">
          <div className="swiper-wrapper">
            {/* Slide Item */}
            <SwiperSlide className="swiper-slide">
              <div className="content-outer">
                <div className="content-box">
                  <div className="inner">
                    <div className="logo">
                      <img src="assets/images/icons/pgroom1.jpeg" alt="" />
                    </div>
                    <h1 className="banner-title">
                      Welcome to  <br />
                      MLV <br />
                      PG
                    </h1>
                    <div className="link-box">
                      <Link href="/gallery">
                        <a className="theme-btn btn-style-one">
                          <span>View Our Rooms</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="image-box">
                    <div className="image">
                      <img src="assets/images/building1edit.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* Slide Item */}
            <SwiperSlide className="swiper-slide">
              <div className="content-outer">
                <div className="content-box">
                  <div className="inner">
                    <div className="logo">
                      {/* <img src="assets/images/single1.jpeg" style={{width:'50%'}} alt="" /> */}
                    </div>
                    <h1 className="banner-title">
                      Welcome to <br />
                     MLV<br />
                       PG
                    </h1>
                    <div className="link-box">
                      <Link href="/gallery">
                        <a className="theme-btn btn-style-one">
                          <span>View Our Rooms</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="image-box">
                    <div className="image">
                      <img src="assets/images/Single1.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
        <div className="banner-slider-nav">
          <div className="banner-slider-control banner-slider-button-prev">
            <span>
              <i className="fas fa-arrow-right" />
            </span>
          </div>
          <div className="banner-slider-control banner-slider-button-next">
            <span>
              <i className="fas fa-arrow-right" />
            </span>{" "}
          </div>
        </div>
      </section>
      {/* End Bnner Section */}
      {/* Check availability */}
      {/* <div className="check-availability">
        <div className="auto-container">
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <div className="left-side">
              <ul>
                <li>
                  {/* <input
                    type="date"
                    placeholder="Arrival Date"
                    className="datepicker"
                  />{" "} */}
                  {/* <i className="far fa-calendar-alt" /> }

                  <DatePicker
                    date={date}
                    onChange={setDate}
                    placeholder={`Arrival Date`}
                  />
                </li>
                <li>
                  <DatePicker
                    date={date2}
                    onChange={setDate2}
                    placeholder={`Departure Date`}
                  />
                </li>
                <li>
                  <select>
                    <option data-display="Aduls">Aduls</option>
                    <option value={1}>0 Adul</option>
                    <option value={2}>1 Adul</option>
                    <option value={4}>2 Aduls</option>
                    <option value={4}>3 Aduls</option>
                    <option value={4}>4 Aduls</option>
                    <option value={4}>5 Aduls</option>
                  </select>
                </li>
                <li>
                  <select>
                    <option data-display="Childrens">Childrens</option>
                    <option value={1}>0 Children</option>
                    <option value={2}>1 Children</option>
                    <option value={4}>2 Childrens</option>
                    <option value={4}>3 Childrens</option>
                    <option value={4}>4 Childrens</option>
                    <option value={4}>5 Childrens</option>
                  </select>
                </li>
              </ul>
            </div>
            <div className="right-side">
              <button type="submit">check availability</button>
            </div>
          </form>
        </div>
      </div> */}
      {/* section one */}
      <section className="section-one">
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="block-one">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="image mb-30">
                      <img src="assets/images/Hall.jpeg" alt="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="inner-box mb-30">
                      <div className="image-two">
                        <img src="assets/images/warden1.jpeg" alt="" />
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="block-two text-center">
                <div className="image mb-10" id="about">
                  <img src="assets/images/pgroom.jpeg" alt="" />
                </div>
                <h2 className="sec-title" >
                  Welcome To Our <br />{" "}
                  <span className="theme-color">Hostel</span>{" "}
                </h2>
                <div className="text-two">
                MLV PG Services is an excellent choice for anyone looking for a comfortable and affordable stay..
                </div>
                <div className="bottom-content justify-content-center">
                  <div className="ratings">4.6</div>
                  <div className="text-three">
                    Students <br /> Ratings
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New features */}


     
      
      {/* section four */}
      <section className="section-four" id="room">
        <div className="auto-container">
          {/* <div className="sub-title text-center">Gallary</div> */}
          <h2 className="sec-title text-center">Rooms</h2>
          <div className="row">
            <div className="col-lg-6">
              <div className="block-four">
                <div className="image">
                  <img src="assets/images/Dual.jpeg" alt="" />
                </div>
                <div className="inner-box">
                  {/* <div className="pricing">$100 per day</div> */}
                  <div className="text">Single Sharing Bed</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="block-four">
                <div className="image">
                  <img src="assets/images/Single1.jpeg" alt="" />
                </div>
                <div className="inner-box">
                  {/* <div className="pricing">$100 per day</div> */}
                  <div className="text">Double Sharing Bed </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="block-four">
                <div className="image">
                  <img src="assets/images/Hall.jpeg" alt="" />
                </div>
                <div className="inner-box">
                  {/* <div className="pricing">$100 per day</div> */}
                  <div className="text">Hall</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="block-four">
                <div className="image">
                  <img src="assets/images/building3edit.JPG" alt="" />
                </div>
                <div className="inner-box">
                  {/* { <div className="pricing">$100 per day</div> } */}
                  <div className="text">Building</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* section six */}
      <section className="section-six">
        <div className="auto-container ">
          <div className="sub-title text-center">Features</div>
          <h2 className="sec-title text-center">Core Features</h2>
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="block-six">
                <div className="icon">
                  {/* <i className="flaticon-game-controller" /> */}
                  <img
                    src="assets/images/icons/restaurant.png"
                    style={{ width: "50%" }}
                  />
                </div>
                <h4>
                  Hygienic Food <br />& Studios Environment
                </h4>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="block-six">
                <div className="icon">
                  {/* <i className="flaticon-game-controller" /> */}
                  <img
                    src="assets/images/icons/secure-shield.png"
                    style={{ width: "50%" }}
                  />
                </div>
                <h4>
                  Security <br />
                  24 * 7
                </h4>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="block-six">
                <div className="icon">
                  {/* <i className="flaticon-game-controller" /> */}
                  <img
                    src="assets/images/icons/water-boiler.png"
                    style={{ width: "50%" }}
                  />
                </div>
                <h4>
                  Aqua Water <br />& Geyser
                </h4>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="block-six">
                <div className="icon">
                  {/* <i className="flaticon-game-controller" /> */}
                  <img
                    src="assets/images/icons/wifi.png"
                    style={{ width: "50%" }}
                  />
                </div>
                <h4>
                  TV, Fridge <br />& Wi-Fi
                </h4>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="block-six">
                <div className="icon">
                  {/* <i className="flaticon-game-controller" /> */}
                  <img
                    src="assets/images/icons/washing-machine.png"
                    style={{ width: "50%" }}
                  />
                </div>
                <h4>
                  Washing <br />
                  Machine
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section seven */}
      
      {/* testimonials section */}
     
      {/* section nine */}

     
      {/* section ten */}
      <section className="section-ten">
        {/* <div className="auto-container">
          <div
            className="block-eleven"
            style={{
              backgroundImage: "url(assets/images/resource/image-12.jpg)",
            }}
          >
            {/* <div className="inner-box text-center">
              <div className="logo">
                <img src="assets/images/resource/image-11.png" alt="" />
              </div>
              <h5>Late Breakfast Until 10Am</h5>
              <Link href="/menu">
                <a className="theme-btn btn-style-one">
                  <span>Breakfast Menu</span>
                </a>
              </Link>
            </div> /}
          </div>
        </div> */}
      </section>
    </Layouts>
  );
};
export default Index;

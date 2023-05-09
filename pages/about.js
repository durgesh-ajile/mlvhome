import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import {
  bannerSlider,
  sponsorsSlider,
  testimonialSlider,
} from "../src/sliderProps";
import {FaUserGraduate} from 'react-icons/fa'
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";

const About = () => {
  return (
    <Layouts>
    <PageBanner pageName={"About Us"} />

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
                  One Of The Highest Rated <br />{" "}
                  <span className="theme-color">PG Services</span>{" "}
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

       <section className="testimonials-section">
        <div className="auto-container">
          <div className="top-content">
            <div className="sec-title text-center mb-30">
              {/* <div className="sub-title">Testimonials</div> */}
              <h2 className="sec-title">Student Feedbacks</h2>
            </div>
          </div>
          <div className="row">
            <Swiper
              {...testimonialSlider}
              className="theme_carousel swiper-container"
            >
              <SwiperSlide className="col-lg-12 block-eight text-center">
                {/* <div className="icon">
                  <i className="flaticon-martini" />
                </div> */}
                <div className="inner-box">
                  <div className="author-info">
                    <div className="thumb">
                    <FaUserGraduate/>
                      {/* <img src="assets/images/resource/image-8.png" alt="" /> */}
                    </div>
                    <div className="rating-info">
                      <div className="rating">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="far fa-star" />
                      </div>
                    </div>
                    <h4>“ Jatin ”</h4>
                  </div>
                  <div className="content">
                    <div className="text">
                    The staff are friendly and always willing to help out with any requests or concerns. Overall, I had a pleasant and comfortable stay at Ganpati Nivas PG and would highly recommend it to anyone looking for affordable and convenient accommodation.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-lg-12 block-eight text-center">
                {/* <div className="icon">
                  <i className="flaticon-conference" />
                </div> */}
                <div className="inner-box">
                  <div className="author-info">
                    <div className="thumb">
                    <FaUserGraduate/>
                      {/* <img src="assets/images/resource/image-9.png" alt="" /> */}
                    </div>
                    <div className="rating-info">
                      <div className="rating">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="far fa-star" />
                      </div>
                    </div>
                    <h4>“Nikhil  ”</h4>
                  </div>
                  <div className="content">
                    <div className="text">
                    As a student staying at MVT Paying Guest, I must say that I am extremely satisfied with the services and facilities provided by the accommodation. The rooms are well-maintained and equipped with all the necessary amenities to make the stay comfortable and convenient.                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-lg-12 block-eight text-center">
                {/* <div className="icon">
                  <i className="flaticon-conference-1" />
                </div> */}
                <div className="inner-box">
                  <div className="author-info">
                    <div className="thumb">
                    <FaUserGraduate/>
                      {/* <img src="assets/images/resource/image-10.png" alt="" /> */}
                    </div>
                    <div className="rating-info">
                      <div className="rating">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="far fa-star" />
                      </div>
                    </div>
                    <h4>“Ravi”</h4>
                  </div>
                  <div className="content">
                    <div className="text">
                    The food provided at MVT Paying Guest is of high quality, with a variety of healthy and delicious options to choose from. The hygiene standards are maintained at all times, which is a great relief for students who are particular about their dietary habits.                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-lg-12 block-eight text-center">
                {/* <div className="icon">
                  <i className="flaticon-martini" />
                </div> */}
                <div className="inner-box">
                  <div className="author-info">
                    <div className="thumb">
                    <FaUserGraduate/>
                      {/* <img src="assets/images/resource/image-8.png" alt="" /> */}
                    </div>
                    <div className="rating-info">
                      <div className="rating">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="far fa-star" />
                      </div>
                    </div>
                    <h4>“ Sunny and Vikas ”</h4>
                  </div>
                  <div className="content">
                    <div className="text">
                    The location of the paying guest is also quite convenient, as it is situated in a prime area that is easily accessible from all parts of the city. The staff members are friendly and always willing to help, which creates a welcoming and homely environment for the residents.                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-lg-12 block-eight text-center">
                {/* <div className="icon">
                  <i className="flaticon-conference" />
                </div> */}
                <div className="inner-box">
                  <div className="author-info">
                    <div className="thumb">
                    <FaUserGraduate/>
                      {/* <img src="assets/images/resource/image-9.png" alt="" /> */}
                    </div>
                    <div className="rating-info">
                      <div className="rating">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="far fa-star" />
                      </div>
                    </div>
                    <h4>“ Durgesh ”</h4>
                  </div>
                  <div className="content">
                    <div className="text">
                    I would highly recommend MVT Paying Guest to any student looking for a safe, comfortable, and affordable accommodation option during their academic journey. The management and staff go out of their way to make the residents feel at home, which makes it a great place to stay.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
          
            </Swiper>
          </div>
        </div>
      </section>
    </Layouts>
  )
}

export default About

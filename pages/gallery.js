import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";
// import VideoPlayer from 'react-video-js-player'
// import {DefaultPlayer as VideoPlayer} from 'react-html5video'

const Gallary = () => {
  return (
    <Layouts>
      <PageBanner pageName={"Gallary"} />
      <section className="section-fourty-four">
        <div className="auto-container">
        {/* <VideoPlayer src='assets/images/video.mp4' poster='assets/images/building1.jpg' /> */}
       
        <h2 className="sec-title" >
                  <span className="theme-color">Building</span>{" "}
                </h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="block-fourty-four">
                <div className="image">
                  <img src="assets/images/building1.jpg" alt="" />
                </div>
                <div className="view-project">
                  <a
                    data-fancybox="example gallery"
                    href="assets/images/building1.jpg"
                    className="zoom-btn"
                  >
                    <i className="flaticon-add-circular-outlined-button" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="block-fourty-four">
                <div className="image">
                  <img src="assets/images/building2.jpg" alt="" />
                </div>
                <div className="view-project">
                  <a
                    data-fancybox="example gallery"
                    href="assets/images/building2.jpg"
                    className="zoom-btn"
                  >
                    <i className="flaticon-add-circular-outlined-button" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="block-fourty-four">
                <div className="image">
                  <img src="assets/images/building3.jpg" alt="" />
                </div>
                <div className="view-project">
                  <a
                    data-fancybox="example gallery"
                    href="assets/images/building3.jpg"
                    className="zoom-btn"
                  >
                    <i className="flaticon-add-circular-outlined-button" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-6">
              <div className="block-fourty-four">
                <div className="image">
                  <img src="assets/images/building4.jpg" alt="" />
                </div>
                <div className="view-project">
                  <a
                    data-fancybox="example gallery"
                    href="assets/images/building4.jpg"
                    className="zoom-btn"
                  >
                    <i className="flaticon-add-circular-outlined-button" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="block-fourty-four">
                <div className="image">
                  <img src="assets/images/building5.jpg" alt="" />
                </div>
                <div className="view-project">
                  <a
                    data-fancybox="example gallery"
                    href="assets/images/building5.jpg"
                    className="zoom-btn"
                  >
                    <i className="flaticon-add-circular-outlined-button" />
                  </a>
                </div>
              </div>
            </div>
           
          </div>

          <h2 className="sec-title" >
                  <span className="theme-color">Rooms</span>{" "}
                </h2>
          <div className="row">
            <div className="col-lg-6">
              <div className="block-fourty-four">
                <div className="image">
                  <img src="assets/images/Single1.jpeg" alt="" />
                </div>
                <div className="view-project">
                  <a
                    data-fancybox="example gallery"
                    href="assets/images/resource/gallary.jpg"
                    className="zoom-btn"
                  >
                    <i className="flaticon-add-circular-outlined-button" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="block-fourty-four">
                <div className="image">
                  <img src="assets/images/Dual.jpeg" alt="" />
                </div>
                <div className="view-project">
                  <a
                    data-fancybox="example gallery"
                    href="assets/images/resource/gallary.jpg"
                    className="zoom-btn"
                  >
                    <i className="flaticon-add-circular-outlined-button" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="block-fourty-four">
                <div className="image">
                  <img src="assets/images/Hall.jpeg" alt="" />
                </div>
                <div className="view-project">
                  <a
                    data-fancybox="example gallery"
                    href="assets/images/resource/gallary.jpg"
                    className="zoom-btn"
                  >
                    <i className="flaticon-add-circular-outlined-button" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="block-fourty-four">
                <div className="image">
                  <img src="assets/images/Room1.jpeg" alt="" />
                </div>
                <div className="view-project">
                  <a
                    data-fancybox="example gallery"
                    href="assets/images/resource/gallary.jpg"
                    className="zoom-btn"
                  >
                    <i className="flaticon-add-circular-outlined-button" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="block-fourty-four">
                <div className="image">
                  <img src="assets/images/Room2.jpeg" alt="" />
                </div>
                <div className="view-project">
                  <a
                    data-fancybox="example gallery"
                    href="assets/images/resource/gallary.jpg"
                    className="zoom-btn"
                  >
                    <i className="flaticon-add-circular-outlined-button" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="block-fourty-four">
                <div className="image">
                  <img src="assets/images/TV.jpeg" alt="" />
                </div>
                <div className="view-project">
                  <a
                    data-fancybox="example gallery"
                    href="assets/images/resource/gallary.jpg"
                    className="zoom-btn"
                  >
                    <i className="flaticon-add-circular-outlined-button" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <h2 className="sub-title text-center" style={{fontSize:'40px', marginBottom:'30px'}}>Watch the video and checkout yourself</h2>
          <div style={{display:'flex', justifyContent:'center'}}>
          {/* <iframe src="https://veed.io/embed/6bd659ff-8404-48db-bff2-3b4d4fadd916" width="360px" height="720px" frameborder="0" title="WhatsApp Video 2023-05-04 at 11.07.06 AM" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> */}
          <iframe src="https://veed.io/embed/2f4480e3-f64a-487d-9611-3c2e544477d5" width="360px" height="720px" title="MLV PG" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          </div>


          <h2 className="sec-title" >
                  <span className="theme-color">Warden</span>{" "}
                </h2>
          <div className="row">
            <div className="col-lg-6">
              <div className="block-fourty-four">
                <div className="image">
                  <img src="assets/images/reception.jpg" alt="" />
                </div>
                <div className="view-project">
                  <a
                    data-fancybox="example gallery"
                    href="assets/images/reception.jpg"
                    className="zoom-btn"
                  >
                    <i className="flaticon-add-circular-outlined-button" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="block-fourty-four">
                <div className="image">
                  <img src="assets/images/reception2.jpg" alt="" />
                </div>
                <div className="view-project">
                  <a
                    data-fancybox="example gallery"
                    href="assets/images/reception2.jpg"
                    className="zoom-btn"
                  >
                    <i className="flaticon-add-circular-outlined-button" />
                  </a>
                </div>
              </div>
            </div>
            
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="block-fourty-four">
                <div className="image">
                  <img src="assets/images/warden1.jpeg" alt="" />
                </div>
                <div className="view-project">
                  <a
                    data-fancybox="example gallery"
                    href="assets/images/warden1.jpeg"
                    className="zoom-btn"
                  >
                    <i className="flaticon-add-circular-outlined-button" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="block-fourty-four">
                <div className="image">
                  <img src="assets/images/warden2.jpeg" alt="" />
                </div>
                <div className="view-project">
                  <a
                    data-fancybox="example gallery"
                    href="assets/images/warden2.jpeg"
                    className="zoom-btn"
                  >
                    <i className="flaticon-add-circular-outlined-button" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </Layouts>
  );
};
export default Gallary;

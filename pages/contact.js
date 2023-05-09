import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";


const Contact = () => {
  return (
    <Layouts>
      <PageBanner pageName={"Contact"} />

      <section className="section-fifty-six" style={{marginBottom:'20px'}}>
        <div className="auto-container">
          <h2 className="sec-title text-center">Book Your Room Here</h2>
        <h3 className="sub-title text-center" style={{fontSize:'30px', marginBottom:'30px'}}>Don't Hesitate to Reach Out to Us Regarding any Concern</h3>
          <div className="row">
            <div className="col-lg-4">
              <div className="block-fifty-six">
                <div className="icon">
                <img
                    src="assets/images/icons/whatsapp.png"
                    style={{ width: "30%" }}
                  />
                </div>
                <div className="icon-border" />
                <h3>WhatsApp</h3>
                <div className="text">
                <p>Deepak</p>
                <a href="https://wa.me/+917999028533">+91 7999028533</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="block-fifty-six">
                <div className="icon">
                <img
                    src="assets/images/icons/whatsapp.png"
                    style={{ width: "30%" }}
                  />
                </div>
                <div className="icon-border" />
                <h3>WhatsApp</h3>
                <div className="text">
                <p>Sujit</p>
                <a href="https://wa.me/+919535340123">+91 9535340123</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="block-fifty-six">
                <div className="icon">
                <img
                    src="assets/images/icons/whatsapp.png"
                    style={{ width: "30%" }}
                  />
                </div>
                <div className="icon-border" />
                <h3>WhatsApp</h3>
                <div className="text">
                <p>Ajeet</p>
                <a href="https://wa.me/+919066570348">+91 9066570348</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-fifty-six">
        <div className="auto-container">
          <div className="row">
            
            <div className="col-lg-3">
              <div className="block-fifty-six">
                <div className="icon">
                  <i className="flaticon-call-2" />
                </div>
                <div className="icon-border" />
                <h3>Phone Number</h3>
                <div className="text">
                <a href="tel:9535340123">+91 9535340123</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="block-fifty-six">
                <div className="icon">
                <img
                    src="assets/images/icons/facebook.png"
                    style={{ width: "35%" }}
                  />
                </div>
                <div className="icon-border" />
                <h3>Facebook</h3>
                <div className="text">
                <a href="https://www.facebook.com/mlvpg/">www.facebook.com/mlvpg</a>
               
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="block-fifty-six">
                <div className="icon">
                <img
                    src="assets/images/icons/twitter.png"
                    style={{ width: "35%" }}
                  />
                </div>
                <div className="icon-border" />
                <h3>Twitter</h3>
                <div className="text">
                <a href="https://twitter.com/mlvbangalore">twitter.com/mlvbangalore</a>
               
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="block-fifty-six">
                <div className="icon">
                  <i className="flaticon-location-2" />
                </div>
                <div className="icon-border" />
                <h3>Address</h3>
                <div className="text">
                13, Shakti Enclave, Opposite Acharya College,

                  <br />
                  Bangalore - 560107
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* map section */}
      <section className="map-section">
        <h4 className="d-none">heading</h4>
        <div className="contact-map">
          <iframe src="https://maps.google.com/maps?q= 13, Shakti Enclave, Opposite Acharya College, Bangalore - 560107&t=&z=15&ie=UTF8&iwloc=&output=embed" />
        </div>
      </section>
      {/* contact section */}
      {/* <section className="contact-section">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="image">
                <img src="assets/images/resource/image-69.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-block">
                <div className="sub-title">Get In Touch</div>
                <h2 className="sec-title mb-30">Make Appointment</h2>
                <div className="text">
                  We Have Over 40 Payment Ways for Locking the Lowest Room
                  Rates. <br /> No Credit Card Needed! Read Reviews from
                  Verified Guests.
                </div>
                <div className="contact-form style-two">
                  <form method="post" onSubmit={(e) => e.preventDefault()}>
                    <div className="row">
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          name="form_name"
                          defaultValue=""
                          placeholder="Enter full name"
                          required=""
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          defaultValue=""
                          placeholder="Enter email address"
                          required=""
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          name="form_phone"
                          defaultValue=""
                          placeholder="Guests"
                          required=""
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          name="form_subject"
                          defaultValue=""
                          placeholder="Select Date"
                          required=""
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <textarea
                          name="form_message"
                          className="form-control"
                          placeholder="Message"
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <input
                          id="form_botcheck"
                          name="form_botcheck"
                          className="form-control"
                          type="hidden"
                          defaultValue=""
                        />
                        <button
                          className="theme-btn btn-style-one"
                          type="submit"
                          data-loading-text="Please wait..."
                        >
                          <span>Make Request</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </Layouts>
  );
};
export default Contact;

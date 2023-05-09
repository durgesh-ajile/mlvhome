import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";

const Services = () => {
  return (
    <Layouts>
      <PageBanner pageName={"Services"} />
      <section className="section-six">
        <div className="auto-container ">
          {/* <div className="sub-title text-center">Features</div> */}
          <h2 className="sec-title text-center">Speciality for Students</h2>
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="col-lg-10 col-md-10 col-sm-10">
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "#be9a78",
                  }}
                >
                  <ul>
                    <h4
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "600",
                        color: "#be9a78",
                      }}
                    >
                      • Separate Hostels For Boy's and Girl's
                    </h4>
                    <h4
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "600",
                        color: "#be9a78",
                      }}
                    >
                      • Twin and Single Sharing Room (Flat System)
                    </h4>
                    <h4
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "600",
                        color: "#be9a78",
                      }}
                    >
                      • Separate Dinning Hall
                    </h4>
                    <h4
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "600",
                        color: "#be9a78",
                      }}
                    >
                      • TV and Fridge in Each Flat
                    </h4>
                    <h4
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "600",
                        color: "#be9a78",
                      }}
                    >
                      • 24 * 7 available of First Aid and Ambulance
                    </h4>
                    <h4
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "600",
                        color: "#be9a78",
                      }}
                    >
                      • WiFi with Adequate Signal Strength
                    </h4>
                    <h4
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "600",
                        color: "#be9a78",
                      }}
                    >
                      • 24/7 - Power Backup
                    </h4>
                    <h4
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "600",
                        color: "#be9a78",
                      }}
                    >
                      • Aqua Fresh Water
                    </h4>
                    <h4
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "600",
                        color: "#be9a78",
                      }}
                    >
                      • Washing Machine
                    </h4>
                    <h4
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "600",
                        color: "#be9a78",
                      }}
                    >
                      • Hot Water Through Geyser
                    </h4>
                    <h4
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "600",
                        color: "#be9a78",
                      }}
                    >
                      • Provision of Tutors
                    </h4>
                    <h4
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "600",
                        color: "#be9a78",
                      }}
                    >
                      • Daily Attendance Checks at 9.00 PM
                    </h4>
                    <h4
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "600",
                        color: "#be9a78",
                      }}
                    >
                      • Hygienic Care with Daily Cleaning
                    </h4>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section two */}
      <section className="section-two">
        <div className="auto-container">
          <h2 className="sec-title text-center text-light">Special Meals</h2>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="block-three">
                <div className="image">
                  <img
                    src="https://images.pond5.com/classic-indian-vegetarian-thali-footage-184858048_iconl.jpeg"
                    alt=""
                  />
                </div>
                <div className="inner-box"></div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="block-three">
                <div className="image" style={{ height: "30rem" }}>
                  <img
                    src="https://thumbs.dreamstime.com/b/mess-food-hostel-mess-food-mess-food-hostel-mess-food-211135230.jpg"
                    alt=""
                  />
                </div>
                <div className="inner-box"></div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="block-three">
                <div className="image">
                  <img
                    src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto,w_600/e_improve/e_sharpen:10/e_saturation:10/f_auto,q_auto/v1655897267/Website/CMS-Uploads/eja1mapnub5irptnjthq.jpg"
                    alt=""
                  />
                </div>
                <div className="inner-box">
                  {/* <div className="title">Free Membership</div> */}
                  <div className="text">
                    Mess <br /> View!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="contained">
        <table className="rwd-table">
          <tbody>
            <tr>
              <th>Days</th>
              <th>Breakfast</th>
              <th>Lunch</th>
              <th>Dinner</th>
            </tr>
            <tr>
              <td data-th="Day">Monday</td>
              <td data-th="Breakfast">Plain Dosa + Sambhar + Chutney</td>
              <td data-th="Lunch">
                Rice + Roti + Bhindi Masala + Bhindi Palya + Toor Dal + Papad +
                Pickle
              </td>
              <td data-th="Dinner">
                Rice + Roti + Kadai Paneer/ Matar Paneer + Dal Fry + Fryms
              </td>
            </tr>
            <tr>
              <td data-th="Day">Tuesday</td>
              <td data-th="Breakfast">Puri + Sagu/Noodles/Pasta</td>
              <td data-th="Lunch">
                Rice + Roti + Aalu Sabji + Rajma + Papad + Salad + Beetroot
                Palya
              </td>
              <td data-th="Dinner">
                Rice + Roti + Aalu Soyabin Sabji + Mix Dal + Kheer + Pickle +
                Salad
              </td>
            </tr>
            <tr>
              <td data-th="Day">Wednesday</td>
              <td data-th="Breakfast">Tomato Rice + Chutney/Raita (Maggie)</td>
              <td data-th="Lunch">
                Rice + Roti +Lauki Chana + Lauki Palya + Dal Makhni + Pickle +
                Salad
              </td>
              <td data-th="Dinner">
                Chicken curry + Paneer + Rice + Roti + Dal + Papad
              </td>
            </tr>
            <tr>
              <td data-th="Day">Thursday</td>
              <td data-th="Breakfast">Paratha + Bhujiya</td>
              <td data-th="Lunch">
                Rice + Roti + Mix Veg + Mix Dal + Pickle + fryms + Mix Palya
              </td>
              <td data-th="Dinner">
                Rice + Roti + Puri + Chala + Jeera Rice + Dal Tadka +
                Kheer/Savei + Pickle + Salad
              </td>
            </tr>

            <tr>
              <td data-th="Day">Friday</td>
              <td data-th="Breakfast">Idli + Sambhar + Chutney</td>
              <td data-th="Lunch">
                Rice + Roti + Aalu Palak/Aalu Patal + Onion Pakoda + Toor Dal +
                Masur Dal
              </td>
              <td data-th="Dinner">
                Rice + Roti + Egg Curry + Mix Veg + Dal Makhani + Papad + Pickle
              </td>
            </tr>

            <tr>
              <td data-th="Day">Saturday</td>
              <td data-th="Breakfast">Aalu Paratha + Tomato Chutney</td>
              <td data-th="Lunch">
                Rice + Roti + Aalu Beans/Aalu Cabbage + Dhaniya Pudina Chutney +
                Kadi Pakoda + Pickle + Papad
              </td>
              <td data-th="Dinner">
                Veg Manchurian/Gobi Manchurian + Rice + Roti + Dal Fry
              </td>
            </tr>

            <tr>
              <td data-th="Day">Sunday</td>
              <td data-th="Breakfast">Puri + Chana Masala</td>
              <td data-th="Lunch">
                Chicken Biryani /Chicken Curry + Veg Biryani/Raita + Rice + Roti
                + Papad
              </td>
              <td data-th="Dinner">Dinner is Not Provided for Boys Student</td>
            </tr>
          </tbody>
        </table>
      </div>

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
    </Layouts>
  );
};
export default Services;

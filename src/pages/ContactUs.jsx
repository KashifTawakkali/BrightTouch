import React from "react";
import ContactForm from "../components/ContactForm";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <>
      {/*Page Title*/}
      <section
        className="page-title centred"
        style={{
          backgroundImage: "url(src/assets/images/background/page-title-5.jpg)",
        }}
      >
        <div className="auto-container">
          <div className="content-box clearfix">
            <h1>Contact Us</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <a href="index-2.html">Home</a>
              </li>
              <li>Get In Touch</li>
            </ul>
          </div>
        </div>
      </section>
      {/*End Page Title*/}

      <>
        {/* contact-information */}
        <section className="contact-information centred">
          <div className="auto-container">
            <div className="sec-title right">
              <h5>focused with work</h5>
              <h2>
                We’re Global Management Consulting Firm <br />
                To Help With Financial Business
              </h2>
            </div>
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                <div
                  className="single-item wow fadeInUp"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className="far fa-map" />
                    </div>
                    <h3>Office Location</h3>
                    <p>
                    613 Global Business Hub, Next to WTC, Kharadi,
                    Pune 411 014, MH, India
                      
                    
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                <div
                  className="single-item wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className="fas fa-phone" />
                    </div>
                    <h3>Calling Support</h3>
                    <p>
                   <a href="tel:101005200369">+91 7249668168</a>
                    </p>
                    <p>
                      {/* Toll Free <a href="tel:080098765">0800 98765</a> */}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                <div
                  className="single-item wow fadeInUp"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className="far fa-envelope-open" />
                    </div>
                    <h3>Email Information</h3>
                    <p>
                      <a href="mailto:support@my-domain.com">
                      www.wilshandharvi.com


                      </a>
                      <br />
                      {/* <a href="mailto:reply@example.org">reply@example.org</a> */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* contact-information end */}
        <>
          {/* world-cyber */}
          {/* <section className="world-cyber contact-page">
            <div
              className="pattern-layer"
              style={{
                backgroundImage: "url(assets/images/shape/shape-2.png)",
              }}
            />
            <div className="auto-container">
              <div className="sec-title centred">
                <h5>Globaly renowned &amp; trusted</h5>
                <h2>Fionca’s Working Everywhere</h2>
              </div>
              <div className="office-location">
                <div className="location-area">
                  <div className="location-box">
                    <div className="address-box">
                      <figure className="icon-box">
                        <img src="assets/images/icons/icon-2.png" alt="" />
                      </figure>
                      <p>Serve you to reach best profits and goals.</p>
                    </div>
                  </div>
                  <div className="location-box">
                    <div className="address-box">
                      <figure className="icon-box">
                        <img src="assets/images/icons/icon-2.png" alt="" />
                      </figure>
                      <p>Serve you to reach best profits and goals.</p>
                    </div>
                  </div>
                  <div className="location-box">
                    <div className="address-box">
                      <figure className="icon-box">
                        <img src="assets/images/icons/icon-2.png" alt="" />
                      </figure>
                      <p>Serve you to reach best profits and goals.</p>
                    </div>
                  </div>
                  <div className="location-box">
                    <div className="address-box">
                      <figure className="icon-box">
                        <img
                          src="../src/assets/images/icons/icon-2.png"
                          alt=""
                        />
                      </figure>
                      <p>Serve you to reach best profits and goals.</p>
                    </div>
                  </div>
                  <div className="location-box">
                    <div className="address-box">
                      <figure className="icon-box">
                        <img
                          src="../src/assets/images/icons/icon-2.png"
                          alt=""
                        />
                      </figure>
                      <p>Serve you to reach best profits and goals.</p>
                    </div>
                  </div>
                  <div className="location-box">
                    <div className="address-box">
                      <figure className="icon-box">
                        <img
                          src="../src/assets/images/icons/icon-2.png"
                          alt=""
                        />
                      </figure>
                      <p>Serve you to reach best profits and goals.</p>
                    </div>
                  </div>
                  <div className="location-box">
                    <div className="address-box">
                      <figure className="icon-box">
                        <img
                          src="../src/assets/images/icons/icon-2.png"
                          alt=""
                        />
                      </figure>
                      <p>Serve you to reach best profits and goals.</p>
                    </div>
                  </div>
                  <div className="location-box">
                    <div className="address-box">
                      <figure className="icon-box">
                        <img
                          src="../src/assets/images/icons/icon-2.png"
                          alt=""
                        />
                      </figure>
                      <p>Serve you to reach best profits and goals.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/* world-cyber end */}

          <ContactForm />

          <>
            {/* clients-section */}
            {/* <section className="clients-section">
              <div className="auto-container">
                <div className="d-flex justify-content-around">
                  <figure className="client-logo">
                    <a href="index-2.html">
                      <img src="assets/images/clients/clients-1.png" alt="" />
                    </a>
                  </figure>
                  <figure className="client-logo">
                    <a href="index-2.html">
                      <img src="assets/images/clients/clients-2.png" alt="" />
                    </a>
                  </figure>
                  <figure className="client-logo">
                    <a href="index-2.html">
                      <img src="assets/images/clients/clients-3.png" alt="" />
                    </a>
                  </figure>
                  <figure className="client-logo">
                    <a href="index-2.html">
                      <img src="assets/images/clients/clients-4.png" alt="" />
                    </a>
                  </figure>
                  <figure className="client-logo">
                    <a href="index-2.html">
                      <img src="assets/images/clients/clients-5.png" alt="" />
                    </a>
                  </figure>
                </div>
              </div>
            </section> */}
            {/* clients-section end */}
            <section className="cta-section">
              <div
                className="pattern-layer"
                style={{
                  backgroundImage: "url(src/assets/images/shape/shape-3.png)",
                }}
              />
              <div className="auto-container">
                <div className="inner-container clearfix">
                  <div className="title pull-left">
                    <h2>
                      We help you to unlock &amp; unleash the power within.
                    </h2>
                  </div>
                  <div className="btn-box pull-right">
                    <Link to="/contactus">get in touch</Link>
                  </div>
                </div>
              </div>
            </section>
          </>
        </>
      </>
    </>
  );
};

export default ContactUs;

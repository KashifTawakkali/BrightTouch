import { Link } from "react-router-dom";
import Testimonial from "../components/Testimonial";
import ProjectStyle from "../components/ProjectStyle";

const AboutUs = () => {
  return (
    <>
      <>
        <section
          className="page-title centred"
          style={{
            backgroundImage: "url(src/assets/images/background/page-title.jpg)",
          }}
        >
          <div className="auto-container">
            <div className="content-box clearfix">
              <h1>About Us</h1>
              <ul className="bread-crumb clearfix">
                <li>
                  <a href="index-2.html">Home</a>
                </li>
                <li>About</li>
              </ul>
            </div>
          </div>
        </section>
        {/*End Page Title*/}
        {/* feature-section */}
        <section className="feature-section sec-pad">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                <div
                  className="feature-block-one wow fadeInUp animated animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src="../src/assets/images/resource/feature-1.jpg"
                        alt=""
                      />
                    </figure>
                    <div className="lower-content">
                      <div className="inner">
                        <h3>Financial Analysis</h3>
                        <a href="index-2.html">
                          <span>Read more</span>
                          <i className="fas fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                <div
                  className="feature-block-one wow fadeInUp animated animated"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src="../src/assets/images/resource/feature-2.jpg"
                        alt=""
                      />
                    </figure>
                    <div className="lower-content">
                      <div className="inner">
                        <h3>Taxation Planning</h3>
                        <a href="index-2.html">
                          <span>Read more</span>
                          <i className="fas fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                <div
                  className="feature-block-one wow fadeInUp animated animated"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src="../src/assets/images/resource/feature-3.jpg"
                        alt=""
                      />
                    </figure>
                    <div className="lower-content">
                      <div className="inner">
                        <h3>Investment Trading</h3>
                        <a href="index-2.html">
                          <span>Read more</span>
                          <i className="fas fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* feature-section end */}
        {/* feature-style-four */}
        <section className="feature-style-four about-page-2">
          <div className="inner-content clearfix">
            <div className="feature-block-four">
              <div className="inner-box">
                <div className="hidden-icon">
                  <i className="flaticon-search" />
                </div>
                <div className="inner">
                  <div className="icon-box">
                    <i className="flaticon-search" />
                  </div>
                  <h3>Great Support</h3>
                  <p>Assured minimum downtime. All service calls are attended on priority basis.</p>
                </div>
              </div>
            </div>
            <div className="feature-block-four">
              <div className="inner-box">
                <div className="hidden-icon">
                  <i className="flaticon-claim" />
                </div>
                <div className="inner">
                  <div className="icon-box">
                    <i className="flaticon-claim" />
                  </div>
                  <h3>Experties</h3>
                  <p>Well qualified and experienced team can understand and resolve your technical problems with ease.</p>
                </div>
              </div>
            </div>
            <div className="feature-block-four">
              <div className="inner-box">
                <div className="hidden-icon">
                  <i className="flaticon-presentation" />
                </div>
                <div className="inner">
                  <div className="icon-box">
                    <i className="flaticon-presentation" />
                  </div>
                  <h3>Emergancy</h3>
                  <p>Emergency services available on Sunday & public holiday. All such calls will be attended within 1-4 hours.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* feature-style-four */}
        {/* about-style-four */}
        <section className="about-style-four">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div id="content_block_13">
                  <div className="content-box">
                    <div className="sec-title style-four right">
                      <h5>About Wilsh And Harvi</h5>
                      <h2>We Work for your best Success</h2>
                    </div>
                    <div className="text">
                      <p>
                      Wilsh and Harvi Private Limited is a startup initiative to provide Software Development ( Windows, Android, iOS), AMC (Annual Maintenance Contract) for PCs, Servers, Printers etc., Web Solutions, Rentals and Supplies.
                      </p>
                      <p>
                      Our aim is to provide best of the service at a cost effective manner Pan-India and to generate high volume employment opportunity to talented youngsters.
                      </p>
                    </div>
                    <div className="progress-content">
                      <div className="progress-box">
                        <p>Payroll Solution</p>
                        <div className="bar">
                          <div
                            // className="bar-inner count-bar"
                            // data-percent="65%"
                          />
                          {/* <span className="count-text">65%</span> */}
                        </div>
                      </div>
                      <div className="progress-box">
                        <p>Hospital Management System</p>
                        <div className="bar">
                          <div
                            // className="bar-inner count-bar"
                            // data-percent="90%"
                          />
                          {/* <span className="count-text">90%</span> */}
                        </div>
                      </div>
                      <div className="progress-box">
                        <p>Smart Attendance System</p>
                        <div className="bar">
                          <div
                            // className="bar-inner count-bar"
                            // data-percent="50%"
                          />
                          {/* <span className="count-text">50%</span> */}
                        </div>
                      </div>
                      <div className="progress-box">
                        <p>Physiotherapy Software</p>
                        <div className="bar">
                          <div
                            // className="bar-inner count-bar"
                            // data-percent="70%"
                          />
                          {/* <span className="count-text">70%</span> */}
                        </div>
                      </div>
                      <div className="progress-box">
                        <p>Web Solutions</p>
                        <div className="bar">
                          <div
                            // className="bar-inner count-bar"
                            // data-percent="70%"
                          />
                          {/* <span className="count-text">70%</span> */}
                        </div>
                      </div>
                      <div className="progress-box">
                        <p>Hardware / Annual Maintenance Contract</p>
                        <div className="bar">
                          <div
                            // className="bar-inner count-bar"
                            // data-percent="70%"
                          />
                          {/* <span className="count-text">70%</span> */}
                        </div>
                      </div>
                      <div className="progress-box">
                        <p>IT Supplies</p>
                        <div className="bar">
                          <div
                            // className="bar-inner count-bar"
                            // data-percent="70%"
                          />
                          {/* <span className="count-text">70%</span> */}
                        </div>
                      </div>
                      <div className="progress-box">
                        <p>Recruitment</p>
                        <div className="bar">
                          <div
                            // className="bar-inner count-bar"
                            // data-percent="70%"
                          />
                          {/* <span className="count-text">70%</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div id="image_block_four">
                  <div className="image-box">
                    <div
                      className="pattern-layer"
                      style={{
                        backgroundImage:
                          "url(src/assets/images/shape/shape-23.png)",
                      }}
                    />
                    <figure
                      className="image wow slideInRight animated animated"
                      data-wow-delay="00ms"
                      data-wow-duration="1500ms"
                    >
                      <img
                        src="../src/assets/images/resource/about-3.jpg"
                        alt=""
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about-style-four end */}
        {/* project-style-four */}
        {/* <section className="project-style-four bg-color-1">
          <div className="auto-container">
            <div className="title-inner clearfix">
              <div className="sec-title style-four right pull-left">
                <h5>our case studies</h5>
                <h2>Recent Projects</h2>
              </div>
              <div className="btn-box pull-right">
                <a href="index-6.html">View More Projects</a>
              </div>
            </div>
            <div className="two-column-carousel owl-carousel owl-theme owl-nav-none">
              <div className="project-block-three">
                <div className="inner-box">
                  <figure className="image-box">
                    <img
                      src="../src/assets/images/gallery/project-17.jpg"
                      alt=""
                    />
                  </figure>
                  <div className="lower-content">
                    <div className="inner">
                      <span>Solution Planning</span>
                      <h3>Advisory Research Solutions</h3>
                      <p>
                        Acepteur sintas haecat sed non sed dui proident sunt sed
                        ipsum tempor adipisicing elit sed incidunt.
                      </p>
                      <a href="index-6.html">
                        <i className="fas fa-arrow-right" />
                        <span>Read More</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-block-three">
                <div className="inner-box">
                  <figure className="image-box">
                    <img
                      src="../src/assets/images/gallery/project-18.jpg"
                      alt=""
                    />
                  </figure>
                  <div className="lower-content">
                    <div className="inner">
                      <span>Solution Planning</span>
                      <h3>Client Market Insights</h3>
                      <p>
                        Acepteur sintas haecat sed non sed dui proident sunt sed
                        ipsum tempor adipisicing elit sed incidunt.
                      </p>
                      <a href="index-6.html">
                        <i className="fas fa-arrow-right" />
                        <span>Read More</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-block-three">
                <div className="inner-box">
                  <figure className="image-box">
                    <img
                      src="../src/assets/images/gallery/project-17.jpg"
                      alt=""
                    />
                  </figure>
                  <div className="lower-content">
                    <div className="inner">
                      <span>Solution Planning</span>
                      <h3>Advisory Research Solutions</h3>
                      <p>
                        Acepteur sintas haecat sed non sed dui proident sunt sed
                        ipsum tempor adipisicing elit sed incidunt.
                      </p>
                      <a href="index-6.html">
                        <i className="fas fa-arrow-right" />
                        <span>Read More</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-block-three">
                <div className="inner-box">
                  <figure className="image-box">
                    <img
                      src="../src/assets/images/gallery/project-18.jpg"
                      alt=""
                    />
                  </figure>
                  <div className="lower-content">
                    <div className="inner">
                      <span>Solution Planning</span>
                      <h3>Client Market Insights</h3>
                      <p>
                        Acepteur sintas haecat sed non sed dui proident sunt sed
                        ipsum tempor adipisicing elit sed incidunt.
                      </p>
                      <a href="index-6.html">
                        <i className="fas fa-arrow-right" />
                        <span>Read More</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-block-three">
                <div className="inner-box">
                  <figure className="image-box">
                    <img
                      src="../src/assets/images/gallery/project-17.jpg"
                      alt=""
                    />
                  </figure>
                  <div className="lower-content">
                    <div className="inner">
                      <span>Solution Planning</span>
                      <h3>Advisory Research Solutions</h3>
                      <p>
                        Acepteur sintas haecat sed non sed dui proident sunt sed
                        ipsum tempor adipisicing elit sed incidunt.
                      </p>
                      <a href="index-6.html">
                        <i className="fas fa-arrow-right" />
                        <span>Read More</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-block-three">
                <div className="inner-box">
                  <figure className="image-box">
                    <img
                      src="../src/assets/images/gallery/project-18.jpg"
                      alt=""
                    />
                  </figure>
                  <div className="lower-content">
                    <div className="inner">
                      <span>Solution Planning</span>
                      <h3>Client Market Insights</h3>
                      <p>
                        Acepteur sintas haecat sed non sed dui proident sunt sed
                        ipsum tempor adipisicing elit sed incidunt.
                      </p>
                      <a href="index-6.html">
                        <i className="fas fa-arrow-right" />
                        <span>Read More</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <ProjectStyle />
        {/* project-style-four end */}
        {/* testimonial-style-two */}
        <Testimonial />
        {/* testimonial-style-two end */}
        {/* cta-section */}
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
                <h2>We help you to unlock &amp; unleash the power within.</h2>
              </div>
              <div className="btn-box pull-right">
                <Link to="contactus">get in touch</Link>
              </div>
            </div>
          </div>
        </section>
        {/* cta-section end */}
        {/* fun-fact */}
        {/* <section className="fun-fact centred">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 counter-column">
                <div
                  className="counter-block-one wow slideInUp"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <div className="count-outer count-box">
                    <span
                      className="count-text"
                      data-speed={1500}
                      data-stop={254}
                    >
                      0
                    </span>
                  </div>
                  <p>Expert Consultants</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 counter-column">
                <div
                  className="counter-block-one wow slideInUp"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <div className="count-outer count-box">
                    <span
                      className="count-text"
                      data-speed={1500}
                      data-stop={930}
                    >
                      0
                    </span>
                  </div>
                  <p>Our Trusted Clients</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 counter-column">
                <div
                  className="counter-block-one wow slideInUp"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <div className="count-outer count-box">
                    <span
                      className="count-text"
                      data-speed={1500}
                      data-stop={826}
                    >
                      0
                    </span>
                  </div>
                  <p>Orders in Queue</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 counter-column">
                <div
                  className="counter-block-one wow slideInUp"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <div className="count-outer count-box">
                    <span
                      className="count-text"
                      data-speed={1500}
                      data-stop={720}
                    >
                      0
                    </span>
                  </div>
                  <p>Projects Delivered</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* fun-fact end */}
      </>
    </>
  );
};

export default AboutUs;

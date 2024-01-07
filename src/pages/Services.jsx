import { Link } from "react-router-dom";
import Service1 from '../assets/images/RemLogo.png'
import Service2 from '../assets/images/pulselogo.jpg'
import Service3 from '../assets/images/BookKeeper.jpg'
import Service4 from '../assets/images/Physio.jpg'
import Service5 from '../assets/images/RemSysBlue.png'
import Service6 from '../assets/images/RemSys Pro.jpg'


const Services = () => {
  return (
    <>
      <>
        {/*Page Title*/}
        <section
          className="page-title centred"
          style={{
            backgroundImage:
              "url(src/assets/images/background/page-title-4.jpg)",
          }}
        >
          <div className="auto-container">
            <div className="content-box clearfix">
              <h1>Planning Strategies</h1>
              <ul className="bread-crumb clearfix">
                <li>
                  <a href="index-2.html">Home</a>
                </li>
                <li>Services</li>
                <li>Full Details</li>
              </ul>
            </div>
          </div>
        </section>
        {/*End Page Title*/}
        {/* service-details */}
        <section className="service-details">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                <div className="service-details-content">
                  <div className="content-style-one">
                    <figure className="image-box">
                      <img
                        src="../src/assets/images/service/service-17.jpg"
                        alt=""
                      />
                    </figure>
                    <div className="sec-title left">
                      <h5> Our Best services </h5>
                      <h2>
                      High Performance Services <br /> For Multiple Industries</h2>
                    </div>
                    <div className="container">
                      <div className="row">
                        <div className="col-md-4">
                    <div className="text">
                      <h2>REMSYS PAYROLL SOLUTION</h2>
                      <img src={Service1} width="80px" />
                      <p>
                      RemSys Payroll Solution is the most efficient and cost-effective software for all business houses.
                      </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                    <div className="text">
                      <h2>HOSPITAL MANAGEMENT</h2>
                      <img src={Service2} width="110px" />
                      <p>
                      Pulse-Hospital Management Software is made for small and large hospitals to work in an efficient manner.                      </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                    <div className="text">
                      <h2>DOCTORS</h2>
                      <img src={Service3} width="100px" />
                      <p>
                      We have developed simple Book-Keeper Software, especially for Clincs and Invidual Doctors of repute.                      </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                    <div className="text">
                      <h2>PHYSIOTHERAPY</h2>
                      <img src={Service4} width="100px" />
                      <p>
                      An easy to use software for Physiotherapy Clinics and Doctors.                    </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                    <div className="text">
                      <h2>SMART ATTENDANCE APP</h2>
                      <img src={Service5} width="100px" />
                      <p>
                      We have developed simple Book-Keeper Software, especially for Clincs and Invidual Doctors of repute.                      </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                    <div className="text">
                      <h2>REMSYS PRO</h2>
                      <img src={Service6}  width="100px" />
                      <p>
                      RemSys Pro is the most advanced Payroll Software with bundle of features. 
                                          </p>
                                          </div>
                      </div>
                      </div>
                    </div>
                    {/* <ul className="list-item clearfix">
                      <li>Acepteur sintas haecat sed non duiy</li>
                      <li>Proident sunt culpa sed ipsum tempor sed</li>
                      <li>Ut enim ad minim veniam quis nostrud exercitation</li>
                      <li>Laboris nisi ut aliquip exy ea consequat duis</li>
                    </ul> */}
                  </div>
                  <div className="content-style-two">
                    <div className="image-box">
                      <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                          <figure className="image">
                            <img
                              src="../src/assets/images/service/service-12.jpg"
                              alt=""
                            />
                          </figure>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                          <figure className="image">
                            <img
                              src="../src/assets/images/service/service-13.jpg"
                              alt=""
                            />
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="text">
                      <p>
                        Exercitation llamco laboris nis aliquip sed conseqrure
                        dolorn repreh deris luptate velit excepteur duis aute
                        irure dolor voluptate labore et dolore magn aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea reprehenderit in
                        voluptate.
                      </p>
                    </div>
                    {/* <div id="content_block_two">
                      <div className="content-box">
                        <div className="inner-box clearfix">
                          <div className="single-progress-box">
                            <div className="box clearfix">
                              <div
                                className="piechart"
                                data-fg-color="#204669"
                                data-value=".75"
                              >
                                <span>.75</span>
                              </div>
                              <div className="text">
                                <h5>Global Flexibility Investment</h5>
                                <h3>Upto 75% More Asests</h3>
                              </div>
                            </div>
                          </div>
                          <div className="single-progress-box">
                            <div className="box clearfix">
                              <div
                                className="piechart"
                                data-fg-color="#da2c46"
                                data-value=".25"
                              >
                                <span>.25</span>
                              </div>
                              <div className="text">
                                <h5>Security Financial Solutions</h5>
                                <h3>Upto 25% More Asests</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div className="content-style-three">
                    <div id="content_block_one">
                      <div className="content-box">
                        <div className="inner-box">
                          <div className="single-item">
                            <div className="icon-box">
                              <span className="bg-box" />
                              
                              <i className="flaticon-computer-1" />
                            </div>

                            <h2>Our satisfied Customer</h2>
                            <h4>
                              <a href="index-2.html">
                              https://aussiepathfinders.com.au/
                              </a>
                            </h4>
                            <p>
                              Veniam quis nostrud exercitason ullamco ipsum
                              laboris sed ut perspiciatis <br />
                              unde sed ipsum nostrud omnis iste natus.
                            </p>
                          </div>
                          <div className="single-item">
                            <div className="icon-box">
                              <span className="bg-box" />
                              <i className="flaticon-browser-1" />
                            </div>
                            <h4>
                              <a href="index-2.html">
                                Outsourced Consulting Business
                              </a>
                            </h4>
                            <p>
                              Veniam quis nostrud exercitason ullamco ipsum
                              laboris sed ut perspiciatis <br />
                              unde sed ipsum nostrud omnis iste natus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                <div className="service-sidebar">
                  <div className="sidebar-categories">
                    <ul className="categories-list clearfix">
                      <li>
                        <a href="financial-analysis.html">Financial Analysis</a>
                      </li>
                      <li>
                        <a href="taxation-planning.html">Taxation Planning</a>
                      </li>
                      <li>
                        <a href="investment-trading.html">Investment Trading</a>
                      </li>
                      <li>
                        <a href="wealth-marketing.html">Wealth Marketing</a>
                      </li>
                      <li>
                        <a href="planning-strategies.html" className="active">
                          Planning Strategies
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar-testimonial">
                    <div className="quote-box">
                      <i className="fas fa-quote-right" />
                    </div>
                    <div className="sidebar-carousel owl-carousel owl-theme owl-nav-none">
                      <div className="content-box">
                        <div className="text">
                          <p>
                            Aliquip exa consequat au repah elit acilum fugiats
                            eparit lorem sect adipis elit sed ven eiusmod
                            aveniam quis nostrud.
                          </p>
                        </div>
                        <div className="author-info">
                          <figure className="image-box">
                            <img
                              src="../src/assets/images/resource/testimonial-9.png"
                              alt=""
                            />
                          </figure>
                          <h6>Willson Thomas</h6>
                          <span className="designation">florida, usa</span>
                        </div>
                      </div>
                      <div className="content-box">
                        <div className="text">
                          <p>
                            Aliquip exa consequat au repah elit acilum fugiats
                            eparit lorem sect adipis elit sed ven eiusmod
                            aveniam quis nostrud.
                          </p>
                        </div>
                        <div className="author-info">
                          <figure className="image-box">
                            <img
                              src="../src/assets/images/resource/testimonial-9.png"
                              alt=""
                            />
                          </figure>
                          <h6>Willson Thomas</h6>
                          <span className="designation">florida, usa</span>
                        </div>
                      </div>
                      <div className="content-box">
                        <div className="text">
                          <p>
                            Aliquip exa consequat au repah elit acilum fugiats
                            eparit lorem sect adipis elit sed ven eiusmod
                            aveniam quis nostrud.
                          </p>
                        </div>
                        <div className="author-info">
                          <figure className="image-box">
                            <img
                              src="../src/assets/images/resource/testimonial-9.png"
                              alt=""
                            />
                          </figure>
                          <h6>Willson Thomas</h6>
                          <span className="designation">florida, usa</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="sidebar-info">
                    <div className="sidebar-title">
                      <h3>Contact Us</h3>
                    </div>
                    <div className="sidebar-content">
                      <p>
                        Tempor incididunt ut labore dolore veniam quis nostrud
                        exercitation ullamc conseq uat duis aute irure.
                      {/* </p> */}
                      {/* <ul className="info-list clearfix">
                        <li>
                          <i className="fas fa-map-marker-alt" />
                          838 Andy Street, Madison, NJ
                        </li>
                        <li>
                          <i className="fas fa-envelope" />
                          <a href="mailto:support@my-domain.com">
                            support@my-domain.com
                          </a>
                        </li>
                        <li>
                          <i className="fas fa-headphones" />
                          <a href="tel:101005200369">+1 0100 5200 369</a>
                        </li>
                      // </ul> */} 
                      {/* <ul className="social-links clearfix">
                        <li>
                          <a href="financial-analysis.html">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="financial-analysis.html">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="financial-analysis.html">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="financial-analysis.html">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li>
                          <a href="financial-analysis.html">
                            <i className="fab fa-pinterest-p" />
                          </a>
                        </li>
                      </ul> */}
                    </div>
                  </div>
                  {/* <div className="download-option">
                    <div className="sidebar-title">
                      <h3>Downloads</h3>
                    </div>
                    <ul className="download-file clearfix">
                      <li>
                        <a href="financial-analysis.html">
                          <i className="fas fa-file-pdf" />
                          Presentation PDF
                        </a>
                      </li>
                      <li>
                        <a href="financial-analysis.html">
                          <i className="fas fa-file" />
                          Brochure DOC
                        </a>
                      </li>
                    </ul> */}
                  </div>
                </div>
              {/* </div> */}
            {/* </div>
          </div> */}
        </section>
        {/* service-details end */}
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
                <Link to="/contactus">get in touch</Link>
              </div>
            </div>
          </div>
        </section>
        {/* cta-section end */}
      </>
    </>
  );
};

export default Services;

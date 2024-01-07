import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      

      <header className="main-header style-four">
        <div className="header-lower">
          <div className="auto-container">
            <div className="outer-box clearfix">
              <div className="logo-box pull-left">
                <figure className="logo">
                  <a href="index-2.html">
                    <img src="../src/assets/images/Wilsh and Harvi Logo.png" width="70px"  />
                    {/* <h3 id="Headers">Wilsh & Harvi</h3> */}
                  </a>
                </figure>
              </div>
              <div className="menu-area pull-right clearfix">
                {/*Mobile Navigation Toggler*/}
                <div className="mobile-nav-toggler">
                  <i className="icon-bar" />
                  <i className="icon-bar" />
                  <i className="icon-bar" />
                </div>
                <nav className="main-menu navbar-expand-md navbar-light">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation clearfix">
                      <li className="dropdown">
                        <Link to="/">Home</Link>
                        {/* <ul>
                          <li>
                            <a href="index-2.html">Home Page One</a>
                          </li>
                          <li>
                            <a href="index-3.html">Home Page Two</a>
                          </li>
                          <li>
                            <a href="index-4.html">Home Page Three</a>
                          </li>
                          <li>
                            <a href="index-5.html">Home Page Four</a>
                          </li>
                          <li>
                            <a href="index-6.html">Home Page Five</a>
                          </li>
                          <li>
                            <a href="index-onepage.html">Home OnePage</a>
                          </li>
                          <li className="dropdown">
                            <a href="index-5.html">Header Style</a>
                            <ul>
                              <li>
                                <a href="index-2.html">Header Style One</a>
                              </li>
                              <li>
                                <a href="index-3.html">Header Style Two</a>
                              </li>
                              <li>
                                <a href="index-4.html">Header Style Three</a>
                              </li>
                              <li>
                                <a href="index-5.html">Header Style Four</a>
                              </li>
                              <li>
                                <a href="index-6.html">Header Style Five</a>
                              </li>
                            </ul>
                          </li>
                        </ul> */}
                      </li>
                      <li className="dropdown">
                        <Link to="aboutus">About</Link>
                        {/* <ul>
                          <li>
                            <a href="about-1.html">About Us 01</a>
                          </li>
                          <li>
                            <a href="about-2.html">About Us 02</a>
                          </li>
                          <li>
                            <a href="team.html">Experts Team</a>
                          </li>
                          <li>
                            <a href="pricing.html">Our Pricing</a>
                          </li>
                          <li>
                            <a href="error.html">Error Page</a>
                          </li>
                        </ul> */}
                      
                        {/* <ul>
                          <li>
                            <a href="service-1.html">Service Page 01</a>
                          </li>
                          <li>
                            <a href="service-2.html">Service Page 02</a>
                          </li>
                          <li>
                            <a href="financial-analysis.html">
                              Financial Analysis
                            </a>
                          </li>
                          <li>
                            <a href="taxation-planning.html">
                              Taxation Planning
                            </a>
                          </li>
                          <li>
                            <a href="investment-trading.html">
                              Investment Trading
                            </a>
                          </li>
                          <li>
                            <a href="wealth-marketing.html">Wealth Marketing</a>
                          </li>
                          <li>
                            <a href="planning-strategies.html">
                              Planning Strategies
                            </a>
                          </li>
                        </ul> */}
                      </li>
                      {/* <li className="dropdown">
                        <a href="index-5.html">Elements</a>
                        <div className="megamenu">
                          <div className="row clearfix">
                            <div className="col-lg-3 column">
                              <ul>
                                <li>
                                  <h4>Elements 1</h4>
                                </li>
                                <li>
                                  <a href="feature-element-1.html">
                                    Feature 01
                                  </a>
                                </li>
                                <li>
                                  <a href="feature-element-2.html">
                                    Feature 02
                                  </a>
                                </li>
                                <li>
                                  <a href="feature-element-3.html">
                                    Feature 03
                                  </a>
                                </li>
                                <li>
                                  <a href="about-element-1.html">About 01</a>
                                </li>
                                <li>
                                  <a href="about-element-2.html">About 02</a>
                                </li>
                                <li>
                                  <a href="about-element-3.html">About 03</a>
                                </li>
                                <li>
                                  <a href="about-element-4.html">About 04</a>
                                </li>
                                <li>
                                  <a href="stats-element.html">Stats Element</a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-3 column">
                              <ul>
                                <li>
                                  <h4>Elements 2</h4>
                                </li>
                                <li>
                                  <a href="news-element-1.html">News 01</a>
                                </li>
                                <li>
                                  <a href="news-element-2.html">News 02</a>
                                </li>
                                <li>
                                  <a href="funfact-element-1.html">
                                    Fun Fact 01
                                  </a>
                                </li>
                                <li>
                                  <a href="funfact-element-2.html">
                                    Fun Fact 02
                                  </a>
                                </li>
                                <li>
                                  <a href="service-element-1.html">
                                    Service 01
                                  </a>
                                </li>
                                <li>
                                  <a href="service-element-2.html">
                                    Service 02
                                  </a>
                                </li>
                                <li>
                                  <a href="skills-element.html">
                                    Skills Element
                                  </a>
                                </li>
                                <li>
                                  <a href="clients-element.html">Clients</a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-3 column">
                              <ul>
                                <li>
                                  <h4>Elements 3</h4>
                                </li>
                                <li>
                                  <a href="team-element-1.html">Team 01</a>
                                </li>
                                <li>
                                  <a href="team-element-2.html">Team 02</a>
                                </li>
                                <li>
                                  <a href="pricing-element.html">Pricing</a>
                                </li>
                                <li>
                                  <a href="testimonial-element-1.html">
                                    Testimonial 01
                                  </a>
                                </li>
                                <li>
                                  <a href="testimonial-element-2.html">
                                    Testimonial 02
                                  </a>
                                </li>
                                <li>
                                  <a href="testimonial-element-3.html">
                                    Testimonial 03
                                  </a>
                                </li>
                                <li>
                                  <a href="work-element-1.html">Working 01</a>
                                </li>
                                <li>
                                  <a href="work-element-2.html">Working 02</a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-3 column">
                              <ul>
                                <li>
                                  <h4>Elements 4</h4>
                                </li>
                                <li>
                                  <a href="project-element-1.html">
                                    Project 01
                                  </a>
                                </li>
                                <li>
                                  <a href="project-element-2.html">
                                    Project 02
                                  </a>
                                </li>
                                <li>
                                  <a href="chart-element.html">Chart Element</a>
                                </li>
                                <li>
                                  <a href="footer-element-1.html">Footer 01</a>
                                </li>
                                <li>
                                  <a href="footer-element-2.html">Footer 02</a>
                                </li>
                                <li>
                                  <a href="footer-element-3.html">Footer 03</a>
                                </li>
                                <li>
                                  <a href="footer-element-4.html">Footer 04</a>
                                </li>
                                <li>
                                  <a href="footer-element-5.html">Footer 05</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li> */}
                      {/* <li className="dropdown">
                        <a href="index-5.html">Blog</a>
                        <ul>
                          <li>
                            <a href="blog-grid.html">Blog Grid</a>
                          </li>
                          <li>
                            <a href="blog-classic.html">Blog Classic</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                        </ul>
                      </li> */}
                      <li>
                      <Link to="products">Products</Link>

                      </li>
                      <li>
                        <Link to="contactus">Contact</Link>
                      </li>
                      <li>
                        <Link to="Services">Services</Link>
                      </li>
                      <li><Link to="Blog">Blog</Link></li>
                    </ul>
                  </div>
                </nav>
                <div className="menu-right-content clearfix">
                  <div className="search-btn">
                    <button type="button" className="search-toggler">
                      {/* <i className="flaticon-search-1" /> */}
                    </button>
                  </div>
                  <div className="btn-box">
                    <Link to="/ContactUs"></Link>

                    <a href="/ContactUs" className="theme-btn">
                      Get a Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*sticky Header*/}
        {/* <div className="sticky-header">
          <div className="auto-container">
            <div className="outer-box clearfix"> */}
              {/* <div className="logo-box pull-left"> */}
                {/* <figure className="logo"> */}
                  {/* <a href="index-2.html"> */}
                    {/* <img src="../src/assets/images/Wilsh and Harvi Logo.png" width="80px" /> */}
                    {/* <h3 id="Headers">Wilsh & Harvi</h3> */}

                  {/* </a> */}
                  
                {/* </figure> */}
              {/* </div> */}
              
              {/* <div className="menu-area pull-right">
              <div className="mobile-nav-toggler">
                  <i className="icon-bar" />
                  <i className="icon-bar" />
                  <i className="icon-bar" />
                </div> */}
                {/* <nav className="main-menu clearfix">
                  <ul className="navigation clearfix">
                  <li className="dropdown"> */}
                  {/* <Link to="/">Home</Link> */}
                  {/* </li>
                  <li className="dropdown"> */}
                        {/* <Link to="aboutus">About</Link> */}
                        {/* </li>
                        <li className="dropdown"> */}
                        {/* <Link to="aboutus">Services</Link> */}
                        {/* </li>
                        <li className="dropdown"> */}
                        {/* <Link to="aboutus">Contact</Link> */}
                        {/* </li>


                  </ul> */}
                  
                {/* </nav> */}
               
                
              {/* </div> */}
              
            {/* </div>
          </div>
        </div> */}
      </header>
      <>
        {/* Mobile Menu  */}
        <div className="mobile-menu">
          <div className="menu-backdrop" />
          <div className="close-btn">
            <i className="fas fa-times" />
          </div>
          <nav className="menu-box">
            <div className="nav-logo">
              <a href="index-2.html">
                <img
                  src="../src/assets/images/mobile-logo.png"
                  alt=""
                  title=""
                />
              </a>
            </div>
            <div className="menu-outer">
              {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
            </div>
            <div className="contact-info">
              <h4>Contact Info</h4>
              <ul>
                <li>Chicago 12, Melborne City, USA</li>
                <li>
                  <a href="tel:+8801682648101">+88 01682648101</a>
                </li>
                <li>
                  <a href="mailto:info@example.com">info@example.com</a>
                </li>
              </ul>
            </div>
            <div className="social-links">
              <ul className="clearfix">
                <li>
                  <a href="index-2.html">
                    <span className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="index-2.html">
                    <span className="fab fa-facebook-square" />
                  </a>
                </li>
                <li>
                  <a href="index-2.html">
                    <span className="fab fa-pinterest-p" />
                  </a>
                </li>
                <li>
                  <a href="index-2.html">
                    <span className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="index-2.html">
                    <span className="fab fa-youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        {/* End Mobile Menu */}
      </>
    </>
  );
};

export default Header;

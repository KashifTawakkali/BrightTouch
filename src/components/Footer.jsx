import React from 'react'
import logo from '../assets/images/Wilsh&HarviFooter.png'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div>
      

    {/* <!-- main-footer --> */}
    <footer class="main-footer alternet-5">
        <div class="footer-upper">
            <div class="auto-container">
                <div class="upper-inner clearfix">
                    <div class="text pull-left">
                        <h2>Do you want to learn about us?</h2>
                        {/* <p>Consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore magna aliqua.</p> */}
                    </div>
                    <div class="btn-box pull-right">
                        <Link to ="/ContactUs"></Link>
                        <a href="/ContactUs" class="theme-btn style-one">Get In Touch Today</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-top">
            <div class="auto-container">
                <div class="widget-section">
                    <div class="row clearfix">
                        <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div class="footer-widget logo-widget">
                                <figure class="footer-logo">
                                    {/* <a href="index-2.html">
                                    <img src={logo} width="80px" /></a> */}
                                <h3 id="Footers">Wilsh & Harvi Pvt.Ltd</h3></figure>

                                <div class="text">
                                    {/* <p>Tempor incididunt ut labore eut dolore veniam quis nostrud exercitation ullamc consequat. Duis aute irure.</p> */}
                                </div>
                                <ul class="info-list clearfix">
                                    <li><i class="fas fa-map-marker-alt"></i>613 Global Business Hub, Next to WTC, Kharadi,<br />
                                                                              Pune 411 014, MH, India

                                                                                                      </li>
                                    <li><i class="fas fa-envelope"></i>Email <a href="mailto:support@my-domain.com">www.wilshandharvi.com</a></li>
                                    <li><i class="fas fa-headphones"></i> <a href="tel:01005200369">+91 7249668168</a></li>
                                </ul>
                                <ul class="social-links clearfix">
                                    <li><a href="index-2.html"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="index-2.html"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="index-2.html"><i class="fab fa-instagram"></i></a></li>
                                    <li><a href="index-2.html"><i class="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="index-2.html"><i class="fab fa-pinterest-p"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div class="footer-widget links-widget ml-70">
                                <div class="widget-title">
                                    <h4>Useful Links</h4>
                                </div>
                                <div class="widget-content">
                                    <ul class="list clearfix">
                                        <li>
                                            <Link to="/AboutUs">About us </Link><a href="/AboutUs"></a></li>
                                        <li><a href="index-2.html">What We Offers</a></li>
                                        <li><a href="index-2.html">Testimonials</a></li>
                                        <li><a href="index-2.html">Our Projectss</a></li>
                                        <li><a href="index-2.html">Latest News</a></li>
                                        <li><a href="index-2.html">Privacy Policy</a></li>
                                        <Link to="/ContactUs"></Link>
                                        <li><a href="/ContactUs">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div class="footer-widget links-widget">
                                <div class="widget-title">
                                    <h4>What We Do</h4>
                                </div>
                                <div class="widget-content">
                                    <ul class="list clearfix">
                                        <li><a href="index-2.html">Financial Advice</a></li>
                                        <li><a href="index-2.html">Business Planning</a></li>
                                        <li><a href="index-2.html">Startup Help</a></li>
                                        <li><a href="index-2.html">Investment Strategy</a></li>
                                        <li><a href="index-2.html">Management Services</a></li>
                                        <li><a href="index-2.html">Market Research</a></li>
                                        <li><a href="index-2.html">SEO Optimization</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div class="footer-widget newsletter-widget">
                                <div class="widget-title">
                                    <h4>Newsletter</h4>
                                </div>
                                <div class="widget-content">
                                    <div class="text">
                                        <p>Get in your inbox the latest News</p>
                                    </div>
                                    <form action="http://azim.commonsupport.com/Fionca/contact.html" method="post" class="newsletter-form">
                                        <div class="form-group">
                                            <i class="far fa-user"></i>
                                            <input type="text" name="name" placeholder="Your Name" required="" />
                                        </div>
                                        <div class="form-group">
                                            <i class="far fa-envelope"></i>
                                            <input type="email" name="email" placeholder="Email address" required="" />
                                        </div>
                                        <div class="form-group message-btn">
                                        <Link to="/ContactUs"></Link>
                                        <a href="/ContactUs" className="theme-btn">
                                          Get a Quote
                                       </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="auto-container">
                <div class="copyright"><p>&copy;  <a href="index-2.html"></a> Powered by Wilsh & Harvi Pvt. Ltd.</p></div>
            </div>
        </div>
    </footer>
    {/* <!-- main-footer end --> */}
    </div>
  )
}

export default Footer

import React from "react";

const AboutCompany = () => {
  return (
    <>
      <section className="about-style-three">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div id="content_block_ten">
                <div className="content-box">
                  <div className="sec-title-two">
                    <h5>SINCE 2019</h5>
                    <h2>We Have Expertise in the Industry.</h2>
                  </div>
                  <div className="text">
                    <p>
                    At Wilsh and harvi, we pride ourselves on our extensive expertise in the industry. Our journey in this field has been a testament to our dedication, hard work, and commitment to excellence</p>
                    
                    <p>
                      <p>Our team possesses in-depth knowledge of the industry, acquired through years of hands-on experience, research, and continuous learning. This knowledge allows us to navigate the complexities of the industry with confidence and precision.</p>
                    Srikanth Vijayaraghavan <br />
                    Director
                    </p>
                  </div>
                  <div className="year-box">
                    <figure className="image-box">
                      {/* <img src="../src/assets/images/icons/text-1.png" alt="" /> */}
                    </figure>
                    {/* <h5> */}
                      {/* years of unbeaten &amp; trust of customers around the */}
                      {/* world */}
                    {/* </h5> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <div id="image_block_three">
                <div className="image-box">
                  <div className="icon-box">
                    <div
                      className="icon icon-1 rotate-me"
                      style={{
                        backgroundImage:
                          "url(src/assets/images/icons/icon-7.png)",
                      }}
                    />
                    <div
                      className="icon icon-2 float-bob-y"
                      style={{
                        backgroundImage:
                          "url(src/assets/images/icons/icon-8.png)",
                      }}
                    />
                    <div
                      className="icon icon-3 rotate-me"
                      style={{
                        backgroundImage:
                          "url(src/assets/images/icons/icon-9.png)",
                      }}
                    />
                  </div>
                  <figure className="image">
                    <img
                      src="../src/assets/images/resource/about-1.png"
                      alt=""
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCompany;

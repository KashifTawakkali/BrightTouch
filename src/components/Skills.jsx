const Skills = () => {
  return (
    <>
      <section className="skills-section">
        <div className="auto-container">
          <div className="row align-items-center clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <div className="image-box">
                <div className="anim-icon">
                  <div
                    className="icon icon-1"
                    style={{
                      backgroundImage:
                        "url(src/assets/images/icons/anim-icon-2.png)",
                    }}
                  />
                </div>
                <figure
                  className="image wow slideInLeft"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <img
                    src="../src/assets/images/resource/skills-1.jpg"
                    alt=""
                  />
                </figure>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div id="content_block_13">
                <div className="content-box">
                  <div className="anim-icon">
                    <div
                      className="icon icon-1 rotate-me"
                      style={{
                        backgroundImage:
                          "url(src/assets/images/icons/anim-icon-1.png)",
                      }}
                    />
                    <div
                      className="icon icon-2 float-bob-y"
                      style={{
                        backgroundImage:
                          "url(src/assets/images/icons/anim-icon-3.png)",
                      }}
                    />
                  </div>
                  <div className="sec-title-two">
                    <h5>Wilsh and Harvi Theme</h5>
                    <h2>Working Solutions For Startups Business</h2>
                  </div>
                  <div className="text">
                    <p>
                    Starting a business is an exciting and challenging endeavor. While the entrepreneurial journey is filled with potential and promise, it also comes with its unique set of hurdles. Working solutions for startups businesses are essential to help you navigate these early challenges and build a solid foundation for your company's success.
                    </p>
                  </div>
                  <div className="progress-content">
                    <h5>Skills We Count On...</h5>
                    <div className="progress-box">
                      <p>Consultancy</p>
                      <div className="bar">
                        <div
                          className="bar-inner count-bar"
                          data-percent="80%"
                        />
                        {/* <span className="count-text">80%</span> */}
                      </div>
                    </div>
                    <div className="progress-box">
                      <p>Support</p>
                      <div className="bar">
                        <div
                          className="bar-inner count-bar"
                          data-percent="95%"
                        />
                        {/* <span className="count-text">95%</span> */}
                      </div>
                    </div>
                    <div className="progress-box">
                      <p>Development</p>
                      <div className="bar">
                        <div
                          className="bar-inner count-bar"
                          data-percent="60%"
                        />
                        {/* <span className="count-text">60%</span> */}
                      </div>
                    </div>
                    <div className="progress-box">
                      <p>ui ux design</p>
                      <div className="bar">
                        <div
                          className="bar-inner count-bar"
                          data-percent="75%"
                        />
                        {/* <span className="count-text">75%</span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;

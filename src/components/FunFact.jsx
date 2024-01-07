import React from "react";

const FunFact = () => {
  return (
    <>
      <section className="funfact-style-three bg-color-4">
        <div className="pattern-layer">
          <div
            className="pattern-1"
            style={{
              backgroundImage: "url(src/assets/images/shape/shape-19.png)",
            }}
          />
          <div
            className="pattern-2"
            style={{
              backgroundImage: "url(src/assets/images/shape/shape-20.png)",
            }}
          />
        </div>
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-5 col-md-12 col-sm-12 content-column">
              <div id="content_block_11">
                <div className="content-box">
                  <div className="sec-title-two light">
                    <h5>Wilsh And Harvi Theme</h5>
                    <h2>The Growing Stats</h2>
                  </div>
                  <div className="text">
                    <p>
                    In today's rapidly evolving world, it's impossible to ignore the compelling and often astonishing statistics that illustrate the incredible growth and transformation happening all around us.
                    </p>
                  </div>
                  <div className="video-btn">
                    <a
                      href="https://www.youtube.com/watch?v=nfP5N9Yc72A&t=28s"
                      className="lightbox-image"
                      data-caption=""
                      style={{
                        backgroundImage:
                          "url(src/assets/images/resource/btn-bg-2.png)",
                      }}
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 inner-column">
              <div id="content_block_12">
                <div className="content-box">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 counter-block">
                      <div
                        className="counter-block-three wow slideInUp"
                        data-wow-delay="00ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="icon-box">
                          <i className="flaticon-briefcase" />
                        </div>
                        <div className="count-outer count-box">
                          <span
                            className="count-text"
                            data-speed={1500}
                            data-stop={195}
                          >
                            155
                          </span>
                          +
                        </div>
                        <h3>Projects Completed</h3>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 counter-block">
                      <div
                        className="counter-block-three wow slideInUp"
                        data-wow-delay="00ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="icon-box">
                          <i className="flaticon-document" />
                        </div>
                        <div className="count-outer count-box">
                          <span
                            className="count-text"
                            data-speed={1500}
                            data-stop={80}
                          >
                            80
                          </span>
                          +
                        </div>
                        <h3>Happy Customers</h3>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 counter-block">
                      <div
                        className="counter-block-three wow slideInUp"
                        data-wow-delay="00ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="icon-box">
                          <i className="flaticon-chat-bubble" />
                        </div>
                        <div className="count-outer count-box">
                          <span
                            className="count-text"
                            data-speed={1500}
                            data-stop={100}
                          >
                            100
                          </span>
                          +
                        </div>
                        <h3>Positive Feedbacks</h3>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 counter-block">
                      <div
                        className="counter-block-three wow slideInUp"
                        data-wow-delay="00ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="icon-box">
                          <i className="flaticon-growth-3" />
                        </div>
                        <div className="count-outer count-box">
                          <span
                            className="count-text"
                            data-speed={1500}
                            data-stop={25}
                          >
                            25
                          </span>
                          +
                        </div>
                        <h3>Startups Growing</h3>
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

export default FunFact;

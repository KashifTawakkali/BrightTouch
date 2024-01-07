const Working = () => {
  return (
    <>
      <section
        className="working-section centred"
        style={{
          backgroundImage: "url(src/assets/images/background/work-1.jpg)",
        }}
      >
        <div className="auto-container">
          <div className="sec-title-two light">
            <h2>Working Steps We Follow</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12 working-block">
              <div
                className="working-block-one wow fadeInUp"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div
                    className="pattern-layer"
                    style={{
                      backgroundImage:
                        "url(src/assets/images/shape/shape-14.png)",
                    }}
                  />
                  <div className="count">1</div>
                  <div className="icon-box">
                    <i className="flaticon-binoculars" />
                  </div>
                  <h5>Research</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 working-block">
              <div
                className="working-block-one wow fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div
                    className="pattern-layer"
                    style={{
                      backgroundImage:
                        "url(src/assets/images/shape/shape-15.png)",
                    }}
                  />
                  <div className="count">2</div>
                  <div className="icon-box">
                    <i className="flaticon-briefcase" />
                  </div>
                  <h5>Develop</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 working-block">
              <div
                className="working-block-one wow fadeInUp"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div
                    className="pattern-layer"
                    style={{
                      backgroundImage:
                        "url(src/assets/images/shape/shape-16.png)",
                    }}
                  />
                  <div className="count">3</div>
                  <div className="icon-box">
                    <i className="flaticon-browser-1" />
                  </div>
                  <h5>Test Phase</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 working-block">
              <div
                className="working-block-one wow fadeInUp"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div
                    className="pattern-layer"
                    style={{
                      backgroundImage:
                        "url(src/assets/images/shape/shape-17.png)",
                    }}
                  />
                  <div className="count">4</div>
                  <div className="icon-box">
                    <i className="flaticon-rocket" />
                  </div>
                  <h5>Launch</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Working;

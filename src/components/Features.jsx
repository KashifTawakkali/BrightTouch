const Features = () => {
  return (
    <>
      <section className="feature-style-three">
        <div
          className="pattern-layer"
          style={{
            backgroundImage: "url(src/assets/images/shape/shape-13.png)",
          }}
        />
        <div className="anim-icon">
          <div
            className="icon icon-1 rotate-me"
            style={{
              backgroundImage: "url(src/assets/images/icons/anim-icon-1.png)",
            }}
          />
          <div
            className="icon icon-2 float-bob-y"
            style={{
              backgroundImage: "url(assets/images/icons/anim-icon-2.png)",
            }}
          />
        </div>
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
              <div
                className="feature-block-three wow fadeInUp"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="flaticon-clipboard" />
                  </div>
                  <h3>WHO WE ARE</h3>
                  <p>
                  Wilsh & Harvi is a Startup India recognised Company.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
              <div
                className="feature-block-three wow fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="flaticon-innovation" />
                  </div>
                  <h3>HOW WE WORK</h3>
                  <p>
                  Our registered office is in Mumbai and Development Center is based out of Pune.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
              <div
                className="feature-block-three wow fadeInUp"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="flaticon-rocket" />
                  </div>
                  <h3>WHAT WE DO</h3>
                  <p>
                  We provide Software Development and Solutions, which is aimed to be affordable by businesses of any size.                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;

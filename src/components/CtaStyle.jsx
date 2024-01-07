import { Link } from "react-router-dom";


const CtaStyle = () => {
  
  return (
    <>
      <section className="cta-style-two">
        <div
          className="pattern-layer"
          style={{
            backgroundImage: "url(src/assets/images/shape/shape-21.png)",
          }}
        />
        <div className="auto-container">
          <div className="inner-box clearfix">
            <div className="sec-title-two light pull-left">
              <h2>Ready To Boost Your Startup Business?</h2>
              <h3>We have got some best plans and solutions for everyone</h3>
            </div>
            <div className="btn-box pull-right">
              <Link to="/ContactUs"></Link>
              <a href="/ContactUs" className="theme-btn">
                Grow With Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaStyle;

import { Helmet } from "react-helmet";
// import banner1 from '../assets/images/banner/banner1.jpg'
// import "../assets"
const Banner = () => {
  return (
    <>
      <Helmet>
        <script src="src/assets/js/owl.js"></script>
      </Helmet>

      <section className="banner-section style-four">
        <div className="banner-carousel owl-theme owl-carousel owl-dots-none">
          <div className="slide-item">
            <div
              className="image-layer"
              style={{backgroundImage: `url(${banner1})`}}            />
            <div className="auto-container">
              <div className="content-box">
                <h1>
                  Creative and Digital <br />
                  Startup Agency
                </h1>
                <p>
                  Beniam quis nostrud exercitation sed lamco laboris nis aliquip
                  sed conseqa sed <br />
                  rure repreh derit luptate velit excepteur ocaan dcats ipsum
                  aliquip
                </p>
                <div className="btn-box">
                  <a href="index-2.html" className="theme-btn style-two">
                    Work With Us
                  </a>
                  <a href="index-7.html" className="banner-btn">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="slide-item">
            <div
              className="image-layer"
              style={{
                backgroundImage: "url(assets/images/banner/banner-11.jpg)",
              }}
            />
            <div className="auto-container">
              <div className="content-box centred">
                <h1>
                  Utilize The Affordable <br />
                  Digital Services
                </h1>
                <p>
                  Beniam quis nostrud exercitation sed lamco laboris nis aliquip
                  sed conseqa sed <br />
                  rure repreh derit luptate velit excepteur ocaan dcats ipsum
                  aliquip
                </p>
                <div className="btn-box">
                  <a href="index-2.html" className="theme-btn style-two">
                    Work With Us
                  </a>
                  <a href="index-7.html" className="banner-btn-two">
                    Our Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="slide-item">
            <div
              className="image-layer"
              style={{
                backgroundImage: "url(assets/images/banner/banner-12.jpg)",
              }}
            />
            <div className="auto-container">
              <div className="content-box">
                <h1>
                  Our Process Ensures <br />
                  Growing Business
                </h1>
                <p>
                  Beniam quis nostrud exercitation sed lamco laboris nis aliquip
                  sed conseqa sed <br />
                  rure repreh derit luptate velit excepteur ocaan dcats ipsum
                  aliquip
                </p>
                <div className="btn-box">
                  <a href="index-2.html" className="theme-btn style-two">
                    Work With Us
                  </a>
                  <a href="index-7.html" className="banner-btn">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;

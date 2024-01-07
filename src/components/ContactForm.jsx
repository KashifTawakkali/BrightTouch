import React from "react";

const ContactForm = () => {
  return (
    <div>
      <section
        className="contact-style-two"
        style={{
          backgroundImage: "url(src/assets/images/background/contact-3.jpg)",
        }}
      >
        <div className="auto-container">
          <div className="">
            <div className="sec-title left light">
              <h5>try our service</h5>
              <h2>We Will Answer All Your <br />Qustions</h2>
              {/* <p>
                Ad mini veniam quis nostrud ipsum exercitas tion ullamco <br />
                ipsum laboris sed ut perspiciatis unde.
              </p> */}
            </div>
            <form id="contact-form" className="default-form">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="text"
                    name="username"
                    placeholder="Your Name"
                    required=""
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    required=""
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    required=""
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required=""
                  />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                  <textarea
                    name="message"
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                  <button
                    className="theme-btn style-one"
                    type="submit"
                    name="submit-form"
                  >
                    request estimate
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;

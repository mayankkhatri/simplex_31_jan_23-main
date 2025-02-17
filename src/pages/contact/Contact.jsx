import React from "react";
import { NavLink } from "react-bootstrap";
import ContactForm from "../../components/ContactForm/ContactForm";
import SubscribeForm from "../../components/SubscribeForm/SubscribeForm";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <section className="firstsec contact">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <h2 className="heading">Get Connect with us</h2>
                <p className="detail">
                  We help you to study abroad and offer some of the best
                  services provided so that you can grow in the future
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="sixthsec contact py-md-5 py-3">
          <div className="container">
            <div className="head mb-5">
              <h5 className="heading">Get in Touch</h5>
              <h3 className="sub-heading">Say hi to us!</h3>
            </div>
            <div className="inputs">
              <ContactForm />
            </div>
          </div>
        </section>
        <section className="seventhsec contact bg-white py-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-5 mb-5">
                <div className="head">
                  <h5 className="heading">Addresses</h5> {/* Corrected typo */}
                  <h3 className="sub-heading mb-0">Our Office Address</h3>
                </div>
              </div>
              <div className="col-12 col-md-7 mb-5 d-flex flex-wrap justify-content-between justify-content-md-around align-items-end">
                {/* Add content if necessary */}
              </div>
              <div className="col-12 col-md-4 mb-4">
                <h5 className="mb-3">HEAD OFFICE</h5>
                <div className="d-flex gap-2">
                  <p>
                    <img
                      src="assets/contact/Location.png"
                      alt="Location Icon" // Added alt text
                    />
                  </p>
                  <p>
                    Office A-53, 54, second floor, Vishal Market, Tagore Garden,
                    New Delhi-110027
                  </p>
                </div>
                <div className="d-flex gap-2">
                  <p>
                    <img
                      src="assets/contact/Phone.png"
                      alt="Phone Icon" // Added alt text
                    />
                  </p>
                  <p>+91 9971223202</p>
                </div>
                <div className="d-flex gap-2">
                  <p>
                    <img
                      src="assets/contact/Mail.png"
                      alt="Mail Icon" // Added alt text
                    />
                  </p>
                  <p>info@simpleximmigration.com</p>
                </div>
                {/* Removed NavLink for Google Maps */}
              </div>
            </div>
          </div>
        </section>
        <section className="seventhsec bg-white py-md-5 py-2">
          <div className="bg-box"></div>
          <img
            src="assets/icons/Ornament.png"
            alt="Background Ornament" // Added alt text
            className="bg-vector"
          />
          <img
            src="assets/icons/Ornament.png"
            alt="Background Ornament"
            className="bg-vector second"
          />
          <img
            src="assets/icons/Ornament.png"
            alt="Background Ornament"
            className="bg-vector third"
          />
          <div className="container">
            <div className="top">
              <h5 className="heading">Offering for you</h5>
              <h3 className="sub-heading">Let us send you offering</h3>
              <p className="detail">
                Let's talk with us and explore more about how we do our work.
              </p>
              {/* Removed the email-subscription section */}
              <SubscribeForm />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;

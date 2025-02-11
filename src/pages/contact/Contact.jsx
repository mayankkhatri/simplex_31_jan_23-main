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
                  services provided so that your can grow in the future
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
                            <h5 className="heading">Addresess</h5>
                            <h3 className="sub-heading mb-0">Our Office Address</h3>
                        </div>
                    </div>
                    <div className="col-12 col-md-7 mb-5 d-flex flex-wrap justify-content-between justify-content-md-around align-items-end">
                        

                    </div>
                    <div className="col-12 col-md-4 mb-4">
                        <h5 className="mb-3">HEAD OFFICE</h5>
                        <div className="d-flex gap-2">
                        <p className=""><img src="assets/contact/Location.png" alt="" className="" /></p>
                        <p className="">Office A-53,54,second floor,Vishal Market,Tagore Garden,New Delhi-110027</p>
                        </div>
                        <div className="d-flex gap-2">
                        <p className=""><img src="assets/contact/Phone.png" alt="" className="" /></p>
                        <p className="">+91 9971223202</p>
                        </div>
                        <div className="d-flex gap-2">
                            <p className=""><img src="assets/contact/Mail.png" alt="" className="" /></p>
                        <p className="">info@simplex-immigration.com</p>
                        </div>
                        {/* <NavLink>Open Maps</NavLink> */}
                    </div>
                   
                </div>
            </div>
        </section>
        <section className="seventhsec bg-white py-md-5 py-2">
          <div className="bg-box"></div>
          <img src="assets/icons/Ornament.png" alt="" className="bg-vector" />
          <img src="assets/icons/Ornament.png" alt="" className="bg-vector second" />
          <img src="assets/icons/Ornament.png" alt="" className="bg-vector third" />
          <div className="container">
            <div className="top">
              <h5 className="heading">Offering for you</h5>
              <h3 className="sub-heading">Let us send you offering</h3>
              <p className="detail">
                Let's talk with us and more explore how we doing our works.
              </p>
              {/* <div className="email-sub d-flex">
                <input type="text" placeholder="Insert your email here" />
                <NavLink className="btn ms-3">
                  <img src="assets/icons/arrow-right.png" alt="" className="" />{" "}
                </NavLink>
              </div> */}
              <SubscribeForm />

            </div>
          </div>
              
        </section>
      </div>
    </>
  );
};

export default Contact;

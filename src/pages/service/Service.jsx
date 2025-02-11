import React from "react";
import { NavLink } from "react-bootstrap";
import "./service.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import { Link } from "react-router-dom";

const Service = () => {

  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  const swiperRef = React.useRef(null)

  return (
    <>
      <div className="service">
        <section className="firstsec service">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <h2 className="heading">Our Best Services! </h2>
                <p className="detail">
                  Our immigration services company offers a wide range of features to help individuals and businesses navigate the complex immigration process
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="secondsec">
        <div className="container">
          <img src="assets/logos/logo-1.png" alt="" className="" />
          <img src="assets/logos/logo-2.png" alt="" className="" />
          <img src="assets/logos/logo-3.png" alt="" className="" />
          <img src="assets/logos/logo-4.png" alt="" className="" />
          <img src="assets/logos/logo-5.png" alt="" className="" />
        </div>
      </section> */}
        <section className="fifthsec service pt-5">
          <img src="assets/icons/Ornament.png" alt="" className="bg-vector" />

          <div className="container">
            <div className="head">
              <div className="row">
                <div className="col-md-6 col-12">
                  <h5 className="heading">Features</h5>
                  <h3 className="sub-heading">
                    Expert immigration services for a smooth and successful application process
                  </h3>
                  <p className="detail">
                    Our immigration services company offers a wide range of features to help individuals and businesses navigate the complex immigration process. Some of our key features include:
                  </p>
                </div>
              </div>
            </div>
            <div className="body">
              <div className="card">
                <div className="head">
                  <div className="img-container">
                    <img
                      src="assets/icons/clock.png"
                      alt=""
                      className="img deactive"
                    />
                    <img
                      src="assets/icons/target.png"
                      alt=""
                      className="img active"
                    />
                  </div>
                </div>
                <div className="body">
                  <h4 className="">Expert guidance and support</h4>
                  <p className="">
                    Our team of experienced and certified immigration professionals will guide you through the entire immigration process and provide you with expert advice and support.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="head">
                  <div className="img-container">

                    <img
                      src="assets/icons/clock.png"
                      alt=""
                      className="img deactive"
                    />
                    <img
                      src="assets/icons/target.png"
                      alt=""
                      className="img active"
                    />
                  </div>
                </div>
                <div className="body">
                  <h4 className="">Efficient processing</h4>
                  <p className="">We pride ourselves on our efficient and timely processing of immigration applications, ensuring that your application is complete and accurate, increasing your chances of success.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="head">
                  <div className="img-container">

                    <img
                      src="assets/icons/clock.png"
                      alt=""
                      className="img deactive"
                    />
                    <img
                      src="assets/icons/target.png"
                      alt=""
                      className="img active"
                    />
                  </div>
                </div>
                <div className="body">
                  <h4 className="">Comprehensive services</h4>
                  <p className="">
                    We offer a range of services including assistance with study permits, work permits, permanent residence applications, and more.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="head">
                  <div className="img-container">

                    <img
                      src="assets/icons/clock.png"
                      alt=""
                      className="img deactive"
                    />
                    <img
                      src="assets/icons/target.png"
                      alt=""
                      className="img active"
                    />
                  </div>
                </div>
                <div className="body">
                  <h4 className="">Personalized approach</h4>
                  <p className="">
                    We take a personalized approach to immigration, ensuring that your unique needs and circumstances are taken into account.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="head">
                  <div className="img-container">

                    <img
                      src="assets/icons/clock.png"
                      alt=""
                      className="img deactive"
                    />
                    <img
                      src="assets/icons/target.png"
                      alt=""
                      className="img active"
                    />
                  </div>
                </div>
                <div className="body">
                  <h4 className="">Document preparation</h4>
                  <p className="">
                    We prepare all the required documents and ensure that they are in the right format and with the right information.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="head">
                  <div className="img-container">

                    <img
                      src="assets/icons/clock.png"
                      alt=""
                      className="img deactive"
                    />
                    <img
                      src="assets/icons/target.png"
                      alt=""
                      className="img active"
                    />
                  </div>
                </div>
                <div className="body">
                  <h4 className="">Stay up-to-date</h4>
                  <p className="">
                    We stay up-to-date with the latest immigration policies and regulations to ensure that your application is in compliance with current laws and requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="thirdsec py-5">
          <div className="container-fluid">
            <div className="head">
              <h5 className="heading">Our Services</h5>
              <h3 className="sub-heading">
                Expert immigration services for a smooth and successful application process
              </h3>
              <p className="detail">
                Simplex Global Immigration (SGI) provide paramount services for
                residence, temporary visas,short-term visa,family visa,study visa
                and much more.
              </p>
            </div>
            <div className="body">
              <div className="slider">
                <Swiper
                  spaceBetween={20}
                  slidesPerView={1.3}
                  loop={true}
                  breakpoints={{

                    768: {
                      slidesPerView: 2.3,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 3.3,
                      spaceBetween: 50,
                    },
                  }}
                  onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                >
                  <SwiperSlide>
                    <div className="card">
                      <div className="head">
                        <div className="img-container">
                          <img
                            src="assets/icons/Dollar.png"
                            alt=""
                            className="img deactive"
                          />
                          <img
                            src="assets/icons/Suitcase.png"
                            alt=""
                            className="img active"
                          />
                        </div>
                      </div>
                      <div className="body">
                        <h4 className="">Job Search Services</h4>
                        <p className="">
                          Job Search Strategy Report: With the help of experts, we create a comprehensive report based on your profile and decide on positioning it in your target country.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card">
                      <div className="head">
                        <div className="img-container">
                          <img
                            src="assets/icons/Dollar.png"
                            alt=""
                            className="img deactive"
                          />
                          <img
                            src="assets/icons/Suitcase.png"
                            alt=""
                            className="img active"
                          />
                        </div>
                      </div>
                      <div className="body">
                        <h4 className="">Resume Writing Services</h4>
                        <p className="">
                          We identify industry trends and job sources to get you more job offers. We help you modify your profile to present it on different platforms.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card">
                      <div className="head">
                        <div className="img-container">
                          <img
                            src="assets/icons/Dollar.png"
                            alt=""
                            className="img deactive"
                          />
                          <img
                            src="assets/icons/Suitcase.png"
                            alt=""
                            className="img active"
                          />
                        </div>
                      </div>
                      <div className="body">
                        <h4 className="">Opportunity Search</h4>
                        <p className="">
                          We ensure that your resume meets international standards, showcases your strengths and build a strong candidature.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* <SwiperSlide>
                    <div className="card">
                      <div className="head">
                        <div className="img-container">
                          <img
                            src="assets/icons/Dollar.png"
                            alt=""
                            className="img deactive"
                          />
                          <img
                            src="assets/icons/Suitcase.png"
                            alt=""
                            className="img active"
                          />
                        </div>
                      </div>
                      <div className="body">
                        <h4 className="">Job Search Services</h4>
                        <p className="">
                          Job Search Strategy Report: With the help of experts, we
                          create a comprehensive report based on your profile and
                          decide on positioning it in your target country.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card">
                      <div className="head">
                        <div className="img-container">
                          <img
                            src="assets/icons/Dollar.png"
                            alt=""
                            className="img deactive"
                          />
                          <img
                            src="assets/icons/Suitcase.png"
                            alt=""
                            className="img active"
                          />
                        </div>
                      </div>
                      <div className="body">
                        <h4 className="">Job Search Services</h4>
                        <p className="">
                          Job Search Strategy Report: With the help of experts, we
                          create a comprehensive report based on your profile and
                          decide on positioning it in your target country.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide> */}
                </Swiper>
                <NavLink className='arrow prev-button' ref={navigationPrevRef} onClick={() => swiperRef.current?.slidePrev()}><img src="assets/icons/Button.png" alt="hjh" /></NavLink>
                <NavLink className='arrow next-button' ref={navigationNextRef} onClick={() => swiperRef.current?.slideNext()}><img src="assets/icons/Button1.png" alt="jhj" /></NavLink>
              </div>
            </div>
          </div>
          <div className="bg-box"></div>
          <img src="assets/icons/Ornament.png" alt="" className="bg-vector" />

        </section>
        {/* <section className="fifthsec last">
          <div className="container">
            <div className="head">
              <div className="row">
                <div className="col-12 col-md-6">
                  <h5 className="heading">How It Works</h5>
                  <h3 className="sub-heading">
                    Get Started with <br />
                    Our Process
                  </h3>
                  <p className="detail">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley.
                  </p>
                </div>
              </div>
            </div>
            <div className="body">
              <div className="card">
                <div className="head">
                  <img src="assets/servicepage/01.png" alt="" className="" />
                </div>
                <div className="body">
                  <h4 className="">01. Planning</h4>
                  <p className="ms-4">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley. Lorem
                    Ipsum has been the industry's standard dummy text ever since
                    the 1500s, when an unknown printer took a galley.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="head">
                  <img src="assets/servicepage/02.png" alt="" className="" />
                </div>
                <div className="body">
                  <h4 className="">02. Brainstorming</h4>
                  <p className="ms-4">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley. Lorem
                    Ipsum has been the industry's standard dummy text ever since
                    the 1500s, when an unknown printer took a galley.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="head">
                  <img src="assets/servicepage/03.png" alt="" className="" />
                </div>
                <div className="body">
                  <h4 className="">03. Targeting</h4>
                  <p className="ms-4">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley. Lorem
                    Ipsum has been the industry's standard dummy text ever since
                    the 1500s, when an unknown printer took a galley.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className="seventhsec pt-5 bg-white">
          <img src="assets/icons/Ornament.png" alt="" className="bg-vector fourth" />
          <img src="assets/icons/Ornament.png" alt="" className="bg-vector fifth" />

          <div className="container">
            <div className="top d-block">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-12 left">
                    <h5 className="heading">Offering for you</h5>
                    <h3 className="sub-heading mb-5">
                      Try your experience working with us offering
                    </h3>
                    <NavLink className="btn">
                      <Link className="text-black" to={'/contact'} style={{ textDecoration: 'unset' }}> Contact Us</Link>
                    </NavLink>
                  </div>
                  <div className="col-md-6 col-12 right">
                    <div className="">
                      <div className="top me-5">
                        <div className="left">
                          <p className="header">200+</p>
                          <p className="footer">Satisfied Clients</p>
                        </div>
                        <div className="right">
                          <p className="header">8</p>
                          <p className="footer">Office in USA</p>
                        </div>
                      </div>
                      <div className="bottom">
                        <div className="left">
                          <p className="header">12</p>
                          <p className="footer">Years of experience</p>
                        </div>
                        <div className="right">
                          <p className="header">425+</p>
                          <p className="footer">Project completed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
};

export default Service;

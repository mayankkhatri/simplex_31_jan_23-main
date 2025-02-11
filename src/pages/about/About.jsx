import React from "react";
import { NavLink } from "react-bootstrap";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="aboutus">
        <section className="firstsec about">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <h2 className="heading">Who Are We</h2>
                <p className="detail">
                  We help you to grow your business and offer some of the best
                  services provided so that your business can grow in the future
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="about_secondsec py-5">
          <img src="assets/icons/Ornament.png" alt="" className="bg-vector" />
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <h2 className="heading fw-bold">About Us</h2>
                
                <p className="detail">
                  <span>Simplex Global Immigration (SGI)</span> is a Delhi based
                  company that has endeavored since its inception in 2014 to
                  bring a one stop solution to all immigration related queries.
                  We are a visionary corporation in India’s Immigration
                  consultancy industry, dedicated to provide unmatched visa
                  solutions to individuals, jobseekers, families, investors and
                  entrepreneurs. Knowledge, Experience and Expertise are our
                  pillars of success.
                </p>
                <div className="img-container">
                  <img
                    src="assets/aboutpage/image-4.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="mission">
                  <h5 className="heading ms-1">Our Mission</h5>
                  <p className="">
                    <img
                      src="assets/icons/Checkmark.png"
                      alt=""
                      className="mx-1"
                    />
                    To provide expert guidance and support to individuals and businesses navigating the complex immigration process.
                  </p>
                  <p className="">
                    <img
                      src="assets/icons/Checkmark.png"
                      alt=""
                      className="mx-1"
                    />
                    To stay up-to-date with the latest immigration policies and regulations to ensure that our clients' applications are in compliance with current laws and requirements.
                  </p>
                  <p className="">
                    <img
                      src="assets/icons/Checkmark.png"
                      alt=""
                      className="mx-1"
                    />
                    To provide efficient and timely processing of immigration applications.
                  </p>
                  <p className="">
                    <img
                      src="assets/icons/Checkmark.png"
                      alt=""
                      className="mx-1"
                    />
                    To take a personalized approach to immigration, ensuring that our clients' unique needs and circumstances are taken into account.
                  </p>
                  <p className="">
                    <img
                      src="assets/icons/Checkmark.png"
                      alt=""
                      className="mx-1"
                    />
                    To provide excellent customer service and build long-term relationships with our clients.
                  </p>
                </div>
                <div className="">
                  <h5 className="heading ms-1">Our Vision</h5>
                  <p className="">
                    <img
                      src="assets/icons/Checkmark.png"
                      alt=""
                      className="mx-1"
                    />
                    Our vision as an immigration services company in India is to be a leader in the industry, known for providing expert guidance and support to individuals and businesses navigating the complex immigration process. We aim to:
                  </p>
                  <p className="">
                    <img
                      src="assets/icons/Checkmark.png"
                      alt=""
                      className="mx-1"
                    />
                    Continuously improve our services to meet the evolving needs of our clients.
                  </p>
                  <p className="">
                    <img
                      src="assets/icons/Checkmark.png"
                      alt=""
                      className="mx-1"
                    />
                    Be recognized as a trusted and reliable partner for all immigration-related matters.
                  </p>
                  <p className="">
                    <img
                      src="assets/icons/Checkmark.png"
                      alt=""
                      className="mx-1"
                    />
                    Help our clients achieve their immigration goals by providing accurate and effective solutions.
                  </p>
                  <p className="">
                    <img
                      src="assets/icons/Checkmark.png"
                      alt=""
                      className="mx-1"
                    />
                    Be the go-to company for individuals and businesses seeking immigration services in India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="fourthsec about">
          <div className="bg-box"></div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <h3 className="subheading mb-4">
                  We are the best service Study abroad and grow your career
                </h3>
                <p className="detail mb-4">
                  SGI is managed and operated by a team of experts and professionals with a cumulative industry experience of several years. They have precision knowledge in the fields of Immigration, Visa processing and other related services. To ensure prompt and hassle free services we have a team of handpicked executives who go through rigorous & in-depth training on country specific immigration and visa processing norms & rules to arm them with the requisite knowledge.
                </p>
                <NavLink className="link" to={'/contact'}>Contact Us</NavLink>
              </div>
              <div className="col-12 col-md-6">
                <img
                  src="assets/aboutpage/image-5.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </section>
        {/* <section className="fifthsec about">
            <div className="container">
                <div className="head">
                    <div className="row">
                        <div className="col-12">
                            <h5 className="heading">Our Teams</h5>
                            <h3 className="sub-heading">We will help you with an <br />Experienced Team</h3>
                            <p className="detail">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                        </div>
                    </div>
                </div>
                <div className="body">
                    <div className="img-card">
                        <img src="" alt="" className="" />
                        <div className="img-card-body">
                            <h5>Savannah Nguyen</h5>
                            <p>Business Planner</p>
                            <p>svannahnguyen@tanahair.std</p>
                            <p>(907) 555-0101</p>
                            <div className="icons d-flex">
                                <img src="assets/icons/Fb-Icon.png" alt="" className="" />
                                <img src="assets/icons/Li-Icon.png" alt="" className="" />
                                <img src="assets/icons/Tw-Icon.png" alt="" className="" />
                            </div>
                        </div>
                    </div>
                    <div className="img-card">
                        <img src="" alt="" className="" />
                        <div className="img-card-body">
                            <h5>Wade Warren</h5>
                            <p>Analyst Business</p>
                        </div>
                    </div>
                    <div className="img-card">
                        <img src="" alt="" className="" />
                        <div className="img-card-body">
                            <h5>Esther Howard</h5>
                            <p>Financial Consultant</p>
                        </div>
                    </div>
                    <div className="img-card">
                        <img src="" alt="" className="" />
                        <div className="img-card-body">
                            <h5>Jenny Wilson</h5>
                            <p>Business Planner</p>
                        </div>
                    </div>
                    <div className="img-card">
                        <img src="" alt="" className="" />
                        <div className="img-card-body">
                            <h5>Jerome Bell</h5>
                            <p>Analyst Business</p>
                        </div>
                    </div>
                    <div className="img-card">
                        <img src="" alt="" className="" />
                        <div className="img-card-body">
                            <h5>Cameron Williamson</h5>
                            <p>Financial Consultant</p>
                        </div>
                    </div>
                    <div className="img-card">
                        <img src="" alt="" className="" />
                        <div className="img-card-body">
                            <h5>Jenny Wilson</h5>
                            <p>Business Planner</p>
                        </div>
                    </div>
                    <div className="img-card">
                        <img src="" alt="" className="" />
                        <div className="img-card-body">
                            <h5>Jerome Bell</h5>
                            <p>Analyst Business</p>
                        </div>
                    </div>
                    <div className="img-card">
                        <img src="" alt="" className="" />
                        <div className="img-card-body">
                            <h5>Cameron Williamson</h5>
                            <p>Financial Consultant</p>
                        </div>
                    </div>
                    <div className="img-card">
                        <img src="" alt="" className="" />
                        <div className="img-card-body">
                            <h5>Jenny Wilson</h5>
                            <p>Business Planner</p>
                        </div>
                    </div>
                    <div className="img-card">
                        <img src="" alt="" className="" />
                        <div className="img-card-body">
                            <h5>Jerome Bell</h5>
                            <p>Analyst Business</p>
                        </div>
                    </div>
                    <div className="img-card">
                        <img src="" alt="" className="" />
                        <div className="img-card-body">
                            <h5>Cameron Williamson</h5>
                            <p>Financial Consultant</p>
                        </div>
                    </div>                  
                </div>
            </div>
            <img src="assets/icons/Ornament.png" alt="" className="bg-vector" />
        </section> */}
        {/* <section className="sixthsec about bg-white py-5 mb-0">
          <img src="assets/icons/Ornament.png" alt="" className="bg-vector first" />
          <img src="assets/icons/Ornament-sm.png" alt="" className="bg-vector second" />
          <div className="bg-box"></div>
            <div className="container">
                <div className="head">
                    <div className="row">
                        <div className="col-12">
                            <h5 className="heading">Gallery</h5>
                            <h3 className="sub-heading mb-4">Get to know us</h3>
                        </div>
                    </div>
                </div>
                <div className="body">
                    <div className="grid-card item1">
                        <img src="" alt="" className="" />
                    </div>
                    <div className="grid-card item2">
                        <img src="" alt="" className="" />
                    </div> 
                    <div className="grid-card item3">
                        <img src="" alt="" className="" />
                    </div>               
                    <div className="grid-card item4">
                        <img src="" alt="" className="" />
                    </div> 
                    <div className="grid-card item5">
                        <img src="" alt="" className="" />
                    </div> 
                    <div className="grid-card item6">
                        <img src="" alt="" className="" />
                    </div> 
                    <div className="grid-card item7">
                        <img src="" alt="" className="" />
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
                    <NavLink className="btn">View All Team</NavLink>
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

export default About;

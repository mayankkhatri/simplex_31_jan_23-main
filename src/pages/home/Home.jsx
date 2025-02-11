import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper";
import "swiper/css/navigation";
import React, { useState } from 'react';
import "./home.css";
import { NavLink } from "react-router-dom";
// import EastIcon from "@mui/icons-material/East";
// import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { TestimonialApi } from "./TestimonialApi";
import SubscribeForm from "../../components/SubscribeForm/SubscribeForm";
import HomeForm from "../../components/HomeForm/HomeForm";

const Home = () => {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  const swiperRef = React.useRef(null)

  return (
    <>
      <div className="home">
        <section className="firstsec">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <h2 className="heading">
                  Best Immigration Consultants in India:
                  {/* We Empowering Individual Through Abroad <span>visa</span> */}
                </h2>
                <p className="detail" style={{ fontSize: '25px' }}>
                  Migrate,work and live in your dream country
                  {/* Here You Can Find the world's Best Visa Services & Courses */}
                </p>
                <NavLink className="btn" variant="primary" onClick={handleShow}>Get Started</NavLink>
              </div>
            </div>
          </div>
        </section>


        {/* popup for get started */}

        <Modal show={show} className="getpopup mt-3"
          onHide={handleClose}
          backdrop="static"
          keyboard={false} centered>
          <Modal.Body>
            <p className="m-0 pb-2" onClick={handleClose} style={{ display: 'flex', justifyContent: 'flex-end', cursor: 'pointer' }}>x</p>
            <HomeForm func={handleClose} />
          </Modal.Body>
        </Modal>
        {/* <section className="secondsec">
          <div className="container">
            <img src="assets/logos/logo-1.png" alt="" className="" />
            <img src="assets/logos/logo-2.png" alt="" className="" />
            <img src="assets/logos/logo-3.png" alt="" className="" />
            <img src="assets/logos/logo-4.png" alt="" className="" />
            <img src="assets/logos/logo-5.png" alt="" className="" />
          </div>
        </section> */}
        <section className="thirdsec pt-5">
          <div className="container-fluid">
            <div className="head">
              {/* <h5 className="heading">Our Services</h5> */}
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
                <img src="assets/icons/Ornament.png" alt="Ornament" className="bg-vector" />
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
                            alt="Dollar"
                            className="img deactive"
                          />
                          <img
                            src="assets/icons/Suitcase.png"
                            alt="Suitcase"
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
                            alt="Dollar"
                            className="img deactive"
                          />
                          <img
                            src="assets/icons/Suitcase.png"
                            alt="Suitcase"
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
                            alt="Dollar"
                            className="img deactive"
                          />
                          <img
                            src="assets/icons/Suitcase.png"
                            alt="Suitcase"
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
                  </SwiperSlide> */}
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
                  </SwiperSlide> */}
                </Swiper>
                <NavLink className='arrow prev-button' ref={navigationPrevRef} onClick={() => swiperRef.current?.slidePrev()}><img src="assets/icons/Button.png" alt="Button" /></NavLink>
                <NavLink className='arrow next-button' ref={navigationNextRef} onClick={() => swiperRef.current?.slideNext()}><img src="assets/icons/Button1.png" alt="Button1" /></NavLink>
              </div>

            </div>
          </div>
          <div className="bg-box"></div>
        </section>
        <section className="fourthsec">
          <div className="bg-box"></div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <img
                  src="assets/homepage/image-2.png"
                  alt="image2"
                  className="img-fluid"
                />
              </div>
              <div className="col-12 col-md-6">
                <h5 className="heading">About Us</h5>
                <h3 className="subheading fw-bold">
                  Visa assistance for study, work, and permanent residence
                </h3>
                <p className="detail">
                  <span>Simplex Global Immigration (SGI)</span> is a Delhi based
                  company that has endeavored since its inception in 2014 to bring
                  a one stop solution to all immigration related queries. We are a
                  visionary corporation in India’s Immigration consultancy
                  industry, dedicated to provide unmatched visa solutions to
                  individuals, jobseekers, families, investors and entrepreneurs.
                  Knowledge, Experience and Expertise are our pillars of success.
                  SGI is managed and operated by a team of experts and
                  professionals with a cumulative industry experience of several
                  years. They have precision knowledge in the fields of
                  Immigration, Visa processing and other related services. To
                  ensure prompt and hassle free services we have a team of
                  handpicked executives who go through rigorous & in-depth
                  training on country specific immigration and visa processing
                  norms & rules to arm them with the requisite knowledge.
                </p>
                <NavLink >Learn More</NavLink>
              </div>
            </div>
          </div>
        </section>
        <section className="fifthsec">
          <img src="assets/icons/Ornament-sm.png" alt="Ornament" className="bg-vector" />
          <div className="container">
            <div className="head">
              <div className="row">
                <div className="col-md-8 col-12">
                  <h5 className="heading">Our Immigration Services </h5>
                  <h3 className="sub-heading">
                    Customised immigration solutions for individuals and businesses
                  </h3>
                  <p className="detail">
                    We are a visionary corporation in India’s Immigration
                    consultancy industry, dedicated to providing unmatched visa
                    solutions to individuals, job seekers, families, investors and
                    entrepreneurs.
                  </p>
                </div>
                {/* <div className="col-md-4 col-12">
                  <NavLink className="btn location-btn">View All Location</NavLink>
                </div> */}
              </div>
            </div>




            <div className="body">
              <div className="sadie-box">
                <img src="assets/homepage/img-1.png" alt="images-1" />
                <div className="sadie-caption">
                  <div className="sadie-title">
                    <NavLink to={'/Australia189'}>View Details</NavLink>
                  </div>
                  <div className="sadie-desc">
                    Australia
                  </div>
                </div>
              </div>{/* Austraila */}
              <div className="sadie-box">
                <img src="assets/homepage/img-6.png" alt="image6" />
                <div className="sadie-caption">
                  <div className="sadie-title">
                    <NavLink to={'/canada-entry'}>View Details</NavLink>
                  </div>
                  <div className="sadie-desc">
                    Canada
                  </div>
                </div>
              </div>{/* canada */}
              <div className="sadie-box">
                <img src="assets/homepage/img-5.png" alt="image5" />
                <div className="sadie-caption">
                  <div className="sadie-title">
                    <NavLink to={'/Germany'}>View Details</NavLink>
                  </div>
                  <div className="sadie-desc">
                    Germany
                  </div>
                </div>
              </div>{/* Germany */}
              <div className="sadie-box">
                <img src="assets/homepage/sweden.jpg" alt="sweden" />
                <div className="sadie-caption">
                  <div className="sadie-title">
                    <NavLink to={'/Sweden'}>View Details</NavLink>
                  </div>
                  <div className="sadie-desc">
                    Sweden
                  </div>
                </div>
              </div>{/* Sweden */}
              <div className="sadie-box">
                <img src="assets/homepage/austria.jpg" alt="austria" />
                <div className="sadie-caption">
                  <div className="sadie-title">
                    <NavLink to={'/Austria'}>View Details</NavLink>
                  </div>
                  <div className="sadie-desc">
                    Austria
                  </div>
                </div>
              </div>{/* Austria */}
              <div className="sadie-box">
                <img src="assets/homepage/hongkong.jpg" alt="hongkong" />
                <div className="sadie-caption">
                  <div className="sadie-title">
                    <NavLink to={'/HongKong'}>View Details</NavLink>
                  </div>
                  <div className="sadie-desc">
                    Hongkong
                  </div>
                </div>
              </div>{/* HongKong */}
              <div className="sadie-box">
                <img src="assets/homepage/img-2.png" alt="image2" />
                <div className="sadie-caption">
                  <div className="sadie-title">
                    <NavLink to={'/USA'}>View Details</NavLink>
                  </div>
                  <div className="sadie-desc">
                    United States of America
                  </div>
                </div>
              </div>{/* US */}
              <div className="sadie-box">
                <img src="assets/homepage/img-3.png" alt="image3" />
                <div className="sadie-caption">
                  <div className="sadie-title">
                    <NavLink to={'/UkprVisa'}>View Details</NavLink>
                  </div>
                  <div className="sadie-desc">
                    United Kindom
                  </div>
                </div>
              </div>{/* UK */}
              <div className="sadie-box">
                <img src="assets/homepage/img-4.png" alt="image4" />
                <div className="sadie-caption">
                  <div className="sadie-title">
                    <NavLink to={'/Singapore'}>View Details</NavLink>
                  </div>
                  <div className="sadie-desc">
                    Singapore
                  </div>
                </div>
              </div>{/* Singapore */}
              <div className="sadie-box">
                <img src="assets/homepage/dubai.jpg" alt="dubai" />
                <div className="sadie-caption">
                  <div className="sadie-title">
                    <NavLink to={'/Dubaivisa'}>View Details</NavLink>
                  </div>
                  <div className="sadie-desc">
                    Dubai
                  </div>
                </div>
              </div>{/* Dubai */}

            </div>
          </div>
        </section>













        <section className="sixthsec bg-white">
          <img src="assets/icons/Ornament-sm.png" alt="Ornament" className="bg-vector" />
          <div className="container">
            <div className="head mb-5">
              <h5 className="text-center heading">Testimonials</h5>
              <h3 className="text-center sub-heading">What Our Customer says</h3>
            </div>
            <div className="slider d-flex" >
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                breakpoints={{

                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  },
                }}
              >

                {TestimonialApi.map((val, key) => (
                  <>
                    <SwiperSlide className="card">
                      <div className="head">
                        <p>{val.describe}</p>
                      </div>
                      <div className="body">
                        <p className="name">{val.client}</p>
                        {/* <p className="post">CEO of Tukang Tikung</p> */}
                      </div>
                    </SwiperSlide>
                  </>


                ))}

                {/* <SwiperSlide className="card">
                  <div className="head">
                    <p>
                      Vineet was very accommodating and assisted me in my Germany Visa Application which I started in 2021 but for some reason, my appointment was paid but not scheduled. He explained the process on the visa application process and sat through it and guided me step by step.  I highly recommend Simplex Global to anyone.
                    </p>
                  </div>
                  <div className="body">
                    <div className="row">
                      <div className="col-3">
                        <div className="img-container"></div>
                      </div>
                      <div className="col-9">
                        <p className="name">Amit Kumar</p>
                        <p className="post">CEO of Tukang Tikung</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="card">
                  <div className="head">
                    <p>
                      I was really impressed by the level of service I received from the Simplex Immigration Team. They were always available to answer my questions and provide me with the necessary information about my Canada pr visa. They made the process of applying for permanent residence so much easier for me and my family.
                    </p>
                  </div>
                  <div className="body">
                    <div className="row">
                      <div className="col-3">
                        <div className="img-container"></div>
                      </div>
                      <div className="col-9">
                        <p className="name">Vineeta Jain</p>
                        <p className="post">CEO of Tukang Tikung</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="card">
                  <div className="head">
                    <p>
                      I applied for a work permit for Poland unskilled recruitment through Simplex Global Immigration and I got an offer from a Truck Driving agency there. The process was completed in 2 months and it was smooth Highly recommend it!                    </p>
                  </div>
                  <div className="body">
                    <div className="row">
                      <div className="col-3">
                        <div className="img-container"></div>
                      </div>
                      <div className="col-9">
                        <p className="name">Hamid</p>
                        <p className="post">CEO of Tukang Tikung</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="card">
                  <div className="head">
                    <p>
                      I am so grateful for the support and assistance provided by the Simplex immigration team during my Canada PR visa application process. Their expertise and attention to detail helped me to successfully achieve my goal of becoming a permanent resident in Canada.
                    </p>
                  </div>
                  <div className="body">
                    <div className="row">
                      <div className="col-3">
                        <div className="img-container"></div>
                      </div>
                      <div className="col-9">
                        <p className="name">Neeraj Chauhan</p>
                        <p className="post">CEO of Tukang Tikung</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide> */}

                {/* <NavLink className='prev'><img src="assets/icons/Button.png" alt="" /></NavLink>
                      <NavLink className='next'><img src="assets/icons/Button1.png" alt="" /></NavLink> */}
              </Swiper>
            </div>
          </div>
        </section>
        <section className="seventhsec bg-white py-md-5 py-2">
          <div className="bg-box"></div>
          <img src="assets/icons/Ornament.png" alt="Ornament" className="bg-vector" />
          <img src="assets/icons/Ornament.png" alt="Ornament" className="bg-vector second" />
          <img src="assets/icons/Ornament.png" alt="Ornament" className="bg-vector third" />
          <div className="container">
            <div className="top HOME">
              <h5 className="heading">Offering for you</h5>
              <h3 className="sub-heading">Let us send your quotation</h3>
              {/* <p className="detail">Let's talk with us and more explore how we doing our works.</p> */}
              <p className="detail">Drop your query and we will assist you</p>
              <SubscribeForm />

            </div>
          </div>

        </section>
      </div>
    </>
  );
};

export default Home;

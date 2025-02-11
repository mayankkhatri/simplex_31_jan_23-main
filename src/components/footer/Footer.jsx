import React from 'react';
import './footer.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <div className="footer">
            
            <div className="bottom">
                <div className="container d-block">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="img-container" >
                                <NavLink to={'/home'}>
                                <img src="assets/logos/logo-bottom.png" alt="" className="" />
                                </NavLink>
                            </div>
                            <p className=''>We are a highly reliable and reputed overseas visa consultancy firm in Delhi who processes immigration, work, or, tourist, study, and several other visas for Indian nationals.</p>
                        </div>
                        <div className="col-12 col-md-2">
                            <h5 className="">Services</h5>
                            <p><NavLink className='link'>Job Search Services</NavLink></p>
                            <p><NavLink className='link'>Opportunity  Research</NavLink></p>
                            <p><NavLink className='link'>Resume Writing</NavLink></p>
                            <p><NavLink className='link'>LinkedIn Marketing</NavLink></p>
                        </div>
                        <div className="col-12 col-md-2">
                            <h5 className="">Company</h5>
                            <p><NavLink className='link' to={'/aboutus'}>About Us</NavLink></p>
                            <p><NavLink className='link' to={'/service'}>Our Services</NavLink></p>
                            <p><NavLink className='link' to={'/contact'}>Contact Us</NavLink></p>
                        </div>
                        <div className="col-12 col-md-2">
                            <h5 className="">Support</h5>
                            <p><NavLink className='link'>Privacy Policy</NavLink></p>
                            <p><NavLink className='link'>Terms of Service</NavLink></p>
                            {/* <p><NavLink className='link'>Code of Conduct</NavLink></p> */}
                        </div>
                    </div>
                    <div className="bottom">
                        <p className="">@{new Date().getFullYear()} Simplex Global Immigration. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
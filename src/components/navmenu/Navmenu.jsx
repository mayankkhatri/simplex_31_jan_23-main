import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import $ from "jquery";
// import { MenuItems } from "./SidebarData";
// import AllMenu from "./SideMenu";
import { FaAngleDown } from "react-icons/fa";

const Navmenu = () => {
  // const [menuItem] = useState(MenuItems);

  $("#Immigration").click(function () {
    $("#About Us").hide();
  });

  const [openAbout, setOpenAbout] = useState(false);
  const [openImm, setOpenImm] = useState(false);

  const [show, setShow] = useState(false);

  const menu = () => {
    setShow(true);
  };
  const cross = () => {
    setShow(false);
  };
  const submenu = () => {
    setShow(false);
  };

  return (
    <>
      <div className="navmenu-md">
        <div className="top">
          <div className="container px-md-0">
            <div className="row">
              <div className="col-6 top">
                <span className="date" style={{ fontSize: "12px" }}>
                  <img src="assets/icons/clock.png" alt="" className="" />
                  Monday - Friday 10:00 AM - 5:00 PM
                </span>
                <span className="location" style={{ fontSize: "12px" }}>
                  <img src="assets/icons/Location.png" alt="" className="" />
                  Office A-53,54,second floor,Vishal Market,Tagore Garden,New
                  Delhi-110027
                </span>
                <span className="phone" style={{ fontSize: "12px" }}>
                  <img src="assets/icons/phone.png" alt="" className="" />
                  <a href="tel: +91 9971223202" style={{ fontSize: "12px" }}>
                    {" "}
                    +91 9971223202
                  </a>
                </span>
              </div>
              <div className="col-6 bottom justify-content-end align-items-center">
                <a
                  className="nav-link"
                  style={{ fontSize: "12px", marginLeft: "15px" }}
                  target="_blank"
                  href="https://www.linkedin.com/in/simplex-global-immigration-87477b217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  rel="noreferrer"
                >
                  Linkedin
                </a>
                <a
                  className="nav-link"
                  style={{ fontSize: "12px", marginLeft: "15px" }}
                  target="_blank"
                  href="https://www.instagram.com/simpleximmigration?igsh=OXBtMXJ6eHgwem1p"
                  rel="noreferrer"
                >
                  Instagram
                </a>
                <a
                  className="nav-link"
                  style={{ fontSize: "12px", marginLeft: "15px" }}
                  target="_blank"
                  href="https://www.facebook.com/share/6sgizqhpuscNBbis/?mibextid=qi2Omg"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom container d-flex">
          <div className="logo">
            <NavLink to={"/home"}>
              <img
                src="/assets/logos/logo-top.png"
                alt=""
                className="logo_img"
              />
            </NavLink>
          </div>
          <ul className="navbar my-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to={"/home"}>
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown-btn about">
              <p className="mb-0">About Us</p>
              <div className="dropdown">
                <div className="container-fluid p-0">
                  <div className="drop-item m-0" style={{ width: "150px" }}>
                    <p className="mb-2">
                      <NavLink to={"/contact"}>Contact Us</NavLink>
                    </p>
                    <p>
                      <NavLink to={"/aboutus"}>Who we are</NavLink>
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown-btn immigration">
              <p className="mb-0">Immigration</p>
              <div className="dropdown">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <div className="drop-item">
                        <h5 className="">Canada</h5>
                        <p>
                          <NavLink to={"/canadapr"}>Canada PR VISA</NavLink>
                        </p>
                        <p>
                          <NavLink to={"/canada-entry"}>
                            Canada Express Entry
                          </NavLink>
                        </p>
                      </div>
                      <div className="drop-item">
                        <h5 className="">Australia</h5>
                        <p>
                          <NavLink to={"/Australia189"}>
                            Australia Skill Independent VISA 189
                          </NavLink>
                        </p>
                        <p>
                          <NavLink to={"/Australia190"}>
                            Australia Skilled Nominated VISA 190
                          </NavLink>
                        </p>
                        <p>
                          <NavLink to={"/Australia491"}>
                            Skilled Work Regional VISA 491
                          </NavLink>
                        </p>
                        <p>
                          <NavLink to={"/AustraliaNominated"}>
                            Australia Skilled Nominated
                          </NavLink>
                        </p>
                      </div>
                      <div className="drop-item">
                        <h5 className="">
                          <NavLink to={"/UkprVisa"}>
                            United Kingdom study / tourist visa
                          </NavLink>
                        </h5>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="drop-item">
                        <h5 className="">
                          <NavLink to={"/Sweden"}>
                            Sweden job seeker visa
                          </NavLink>
                        </h5>
                      </div>
                      <div className="drop-item">
                        <h5 className="">
                          <NavLink to={"/Austria"}>
                            Austria job seeker visa
                          </NavLink>
                        </h5>
                      </div>
                      <div className="drop-item">
                        <h5 className="">
                          <NavLink to={"/Dubaivisa"}>Dubai visa</NavLink>
                        </h5>
                      </div>
                      <div className="drop-item">
                        <h5 className="">
                          <NavLink to={"/Germany"}>
                            Germany job seeker visa
                          </NavLink>
                        </h5>
                      </div>
                      <div className="drop-item">
                        <h5 className="">
                          <NavLink to={"/Singapore"}>
                            Singapore immigration
                          </NavLink>
                        </h5>
                      </div>
                      <div className="drop-item">
                        <h5 className="">
                          <NavLink to={"./USA"}>
                            United states study / tourist visa
                          </NavLink>
                        </h5>
                      </div>
                      <div className="drop-item">
                        <h5 className="">
                          <NavLink to={"/HongKong"}>Hong kong</NavLink>
                        </h5>
                      </div>
                    </div>
                    {/* <div className="col-lg-4 col-12">
                      <div className="drop-item">
                        <h5 className="">Singapore</h5>
                        <p><NavLink to={'/Singapore'}>Singapore PR VISA</NavLink></p>
                      </div>
                      <div className="drop-item">
                        <h5 className="">United States</h5>
                        <p><NavLink to={'./USA'}>United States PR VISA</NavLink></p>
                      </div>
                      <div className="drop-item">
                        <h5 className="">Hongkong</h5>
                        <p><NavLink to={'/HongKong'}>Hong kong PR VISA</NavLink></p>
                      </div>
                      <div className="drop-item">
                        <h5 className="">Germany</h5>
                        <p><NavLink to={'/Germany'}>Germany PR VISA</NavLink></p>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/service"}>
                Our Services
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to={"/blog"}>
                Blogs
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
      <div className="navmenu-sm">
        <div className="container">
          <div className="logo">
            <NavLink to={"/home"}>
              <img
                src="/assets/logos/logo-top.png"
                alt=""
                className="logo_img"
              />
            </NavLink>
          </div>
          <div className="menu">
            <NavLink onClick={menu}>
              <img
                src="/assets/icons/menu.png"
                alt=""
                className={`menu_img  ${!show ? "active" : ""}`}
              />
            </NavLink>
            <NavLink onClick={cross}>
              <img
                src="/assets/icons/close.png"
                alt=""
                className={`cross_img ${!show ? "" : "active"}`}
              />
            </NavLink>
          </div>
        </div>
      </div>
      <div
        className={`sidebar flex-column align-item-center justify-content-between ${
          !show ? "" : "active"
        }`}
      >
        {/* <div className="sidebar">
          {
            Items.map((item, index) => <SideMenu key={index} item={item} />)
          }
        </div> */}

        <ul className="sidebar-links menuItems list-unstyled">
          {/* <AllMenu menuItem={menuItem} /> */}
          <li className="nav-item">
            <NavLink className="nav-link" to={"/home"} onClick={submenu}>
              Home
            </NavLink>
          </li>
          <li className="nav-item dropdown-btn about">
            <p className="mb-0" onClick={() => setOpenAbout((prev) => !prev)}>
              About Us <FaAngleDown />
            </p>
            {openAbout && (
              <div className="dropdown dropDownProfile">
                <div className="container">
                  <div className="drop-item ">
                    <NavLink
                      to={"/contact"}
                      className="drop-link"
                      onClick={submenu}
                    >
                      Contact Us
                    </NavLink>
                    <NavLink
                      to={"/aboutus"}
                      className="drop-link"
                      onClick={submenu}
                    >
                      Who we are
                    </NavLink>
                  </div>
                </div>
              </div>
            )}
          </li>

          <li className="nav-item dropdown-btn immigration">
            <p className="mb-0" onClick={() => setOpenImm((prev) => !prev)}>
              Immigration <FaAngleDown />
            </p>
            {openImm && (
              <div className="dropdown">
                <div className="container">
                  <div className="drop-item ">
                    <NavLink
                      to={"/canada-entry"}
                      className="drop-link"
                      onClick={submenu}
                    >
                      Canada
                    </NavLink>
                    <NavLink
                      to={"/Australia189"}
                      className="drop-link"
                      onClick={submenu}
                    >
                      Australia
                    </NavLink>
                    <NavLink
                      to={"/Germany"}
                      className="drop-link"
                      onClick={submenu}
                    >
                      Germany
                    </NavLink>
                    <NavLink
                      to={"/Sweden"}
                      className="drop-link"
                      onClick={submenu}
                    >
                      Sweden
                    </NavLink>
                    <NavLink
                      to={"/Austria"}
                      className="drop-link"
                      onClick={submenu}
                    >
                      Austria
                    </NavLink>
                    <NavLink
                      to={"/HongKong"}
                      className="drop-link"
                      onClick={submenu}
                    >
                      Hongkong
                    </NavLink>
                    <NavLink
                      to={"/USA"}
                      className="drop-link"
                      onClick={submenu}
                    >
                      United States of America
                    </NavLink>
                    <NavLink
                      to={"/Singapore"}
                      className="drop-link"
                      onClick={submenu}
                    >
                      {" "}
                      Singapore
                    </NavLink>
                    <NavLink
                      to={"/Dubaivisa"}
                      className="drop-link"
                      onClick={submenu}
                    >
                      Dubai
                    </NavLink>
                  </div>
                </div>
              </div>
            )}
          </li>

          <li className="nav-item" onClick={submenu}>
            <NavLink className="nav-link" to={"/service"}>
              Our Services
            </NavLink>
          </li>
        </ul>
        {/* <div className="row">
          <div className="col-12 top">
            <p className="date">
              <img src="assets/icons/clock.png" alt="" className="" />
              Monday - Friday 10:00 AM - 5:00 PM
            </p>
            <p className="location">
              <img src="assets/icons/Location.png" alt="" className="" />
              2491 Daffodil Lane, LA
            </p>
            <p className="phone">
              <img src="assets/icons/phone.png" alt="" className="" />
              (+1) 923 2341 22
            </p>
          </div>
          <div className="col-12 bottom d-flex justify-content-between fw-bold text-white">
            <NavLink className="nav-link" >Linkedin</NavLink>
            <NavLink className="nav-link">Instagram</NavLink>
            <NavLink className="nav-link">Facebook</NavLink>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Navmenu;

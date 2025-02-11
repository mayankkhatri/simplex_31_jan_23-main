import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import $ from 'jquery';
// import { Link } from 'react-router-dom';
// import DropdownItem from 'react-bootstrap/esm/DropdownItem';

// const AllMenu = ({ menuItem }) => {

//     $('#About Ustoggle').click(function () {
//         $('#About Us').show();
//     });
//     $('#Hometoggle,#About Ustoggle,#Immigrationtoggle,#Our Services').click(function () {
//         $('#About Us').hide();
//     });


//     $('#Immigrationtoggle').click(function () {
//         $('#Immigration').show();
//     });
//     $('#Hometoggle,#About Ustoggle,#About Ustoggle,#Our Services').click(function () {
//         $('#Immigration').hide();
//     });

//     return (
//         <>
//           {menuItem.map((CuntElem) => {
//             return (
//               <>
//                 <li className={CuntElem.id} id={CuntElem.name + 'toggle'} key={CuntElem.id}>
//                   <NavLink to={CuntElem.visitLink}  >
//                     <span>{CuntElem.name}</span>
//                   </NavLink>
//                   <div className='SubMenuItems' id={CuntElem.name}>
//                     <NavLink to="/contact"  >
//                       <span>{CuntElem.SubMenu1}</span>
//                     </NavLink>
//                     <NavLink to='/aboutus'  >
//                       <span>{CuntElem.SubMenu2}</span>
//                     </NavLink>
//                   </div>
//                 </li>
//               </>
//             )
    
//           })}
//         </>
    
//       )
//     }
    

// export default AllMenu
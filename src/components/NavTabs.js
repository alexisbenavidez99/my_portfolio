// import React from 'react';
// import { Link } from "react-router-dom";

// export default function NavTabs() {
//     return (
//         <div>
//             <nav className="navbar navbar-expand-lg navbar-dark bg-black">
//                 <div className="container-fluid">
//                     <a className="navbar-brand" href="/about">
//                         <p className="name-icon">Alexis</p>
//                         <p className="name-icon">Benavidez.</p>
//                     </a>
//                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//                         <ul className="nav">
//                             <li className="nav-item px-2">
//                                 <Link to="/about"> About </Link>
//                             </li>

//                             <li className="nav-item px-2">
//                             <Link to="/projects"> Projects </Link>
//                             </li>

//                             <li className="nav-item px-2">
//                             <Link to="/resume"> Resume </Link>
//                             </li>
                            
//                             <li className="nav-item px-2">
//                             <Link to="/contact"> Contact </Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     )
// }

// import React, { useState } from 'react';
// import {
//   MDBContainer,
//   MDBCollapse,
//   MDBNavbar,
//   MDBNavbarToggler,
//   MDBIcon,
//   MDBBtn,
// } from 'mdb-react-ui-kit';

// export default function NavTabs() {
//   const [showAnimated2, setShowAnimated2] = useState(false);

//   return (
//     <>
//       <section className='mb-3'>
//         <MDBNavbar dark expand='lg'>
//           <MDBContainer fluid>
//           <a className="navbar-brand" href="/about">
//                       <p className="name-icon">Alexis</p>
//                       <p className="name-icon">Benavidez.</p>
//                     </a>
//             <MDBNavbarToggler
//               type='button'
//               className='ms-auto'
//               data-target='#navbarToggleExternalContent'
//               aria-controls='navbarToggleExternalContent'
//               aria-expanded='false'
//               aria-label='Toggle navigation'
//               onClick={() => setShowAnimated2(!showAnimated2)}
//             >
//               <div className={`animated-icon2 ${showAnimated2 && 'open'}`}>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </div>
//             </MDBNavbarToggler>
//           </MDBContainer>
//         </MDBNavbar>

//         <MDBCollapse show={showAnimated2}>
//           <div className='shadow-3 p-4'>
//             <MDBBtn block className='border-bottom m-0 nav-link' color='link'>
//               About
//             </MDBBtn>
//             <MDBBtn block className='border-bottom m-0 nav-link' color='link'>
//               Projects
//             </MDBBtn>
//             <MDBBtn block className='border-bottom m-0 nav-link' color='link'>
//               Resume
//             </MDBBtn>
//             <MDBBtn block className='border-bottom m-0 nav-link' color='link'>
//               Contact
//             </MDBBtn>
//           </div>
//         </MDBCollapse>
//       </section>
//       </>
//   );
// }


import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';

export default function NavTabs() {
  const [showNavColor, setShowNavColor] = useState(false);

  return (
    <>
      <MDBNavbar expand='lg' dark>
        <MDBContainer fluid>
          <MDBNavbarBrand><a className="navbar-brand" href="/about">
                      <p className="name-icon">Alexis</p>                       <p className="name-icon">Benavidez.</p>
                   </a></MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColor(!showNavColor)}
          >
            <MDBIcon fab icon='bars' />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColor} navbar>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0 justify-content-end'>
              <MDBNavbarItem className='active'>
                <MDBNavbarLink aria-current='page' href="/about">
                  About
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/projects">Projects</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/resume">Resume</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/contact">Contact</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}  
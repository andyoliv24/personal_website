import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import AndyPic from '../../images/Self/profile.jpeg';

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-medi pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Contact:</h5>
            <p>
              Email: Andy_240311@hotmail.com
              <hr></hr>
              <img src={AndyPic} alt="thumbnail" className="img-thumbnail" style={{height: "13rem", width: "13rem"}}/>
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://www.linkedin.com/in/andy-olivares-a66263166/"><MDBIcon fab icon="linkedin" size="2x" className="text-primary" />&nbsp;&nbsp; LinkedIn </a>
              </li>
              <br></br>
              <li className="list-unstyled">
                <a href="https://github.com/andyoliv24"><MDBIcon fab icon="github" size="2x" className="black-text" />&nbsp;&nbsp; Github</a>
              </li>
              <br></br>
              <li className="list-unstyled">
               <a href="https://onedrive.live.com/view.aspx?cid=86631D97C6F3B559&resid=86631D97C6F3B559%2124318&canary=ZK2VWzcxLtWfF%2BLE7Xkqvuetb%2BAVlWJB2cc5KnZRq7o%3D6&ithint=%2Epdf&open=true&app=WordPdf"><MDBIcon icon="file-pdf" size="2x" className="red-text" /> &nbsp;&nbsp;Resume</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="#"> Developer: Andy Olivares </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;
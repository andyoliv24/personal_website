import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!"><MDBIcon fab icon="linkedin" size="2x" className="white-text" />LinkedIn </a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><MDBIcon fab icon="github" size="2x" className="black-text" />Github</a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><MDBIcon icon="file" size="2x" className="white-text" />Resume</a>
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
import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import DiscoverFinancialPicture from '../../../images/DFSPicture.png';


const Discover = () => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem", "margin-top": "2rem" }}>
        <MDBCardImage className="img-fluid" src={DiscoverFinancialPicture} waves style={{ height: "20rem"}}  />
        <MDBCardBody>
          <MDBCardTitle>Software Developer</MDBCardTitle>
          <MDBCardText>
            <ul>
              <li>Role: Software Developer</li>
              <li>Duties: Implement and improve already existing software.</li>
              <li>Experience: 8 months</li>
              <br></br>
            </ul>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default Discover;
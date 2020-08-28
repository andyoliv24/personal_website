import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import FreelancerPicture from '../../../images/freelance.jpg';


const Freelancer = () => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem", "margin-top": "2rem" }}>
        <MDBCardImage className="img-fluid" src={FreelancerPicture} waves style={{ height: "15rem", width: "22rem"}} />
        <MDBCardBody>
          <MDBCardTitle>Freelancer</MDBCardTitle>
          <MDBCardText>
            <ul>
              <li>Role: Software Developer/Software Engineer</li>
              <li>Duties: Come up with ideas to solve the client's problems</li>
              <li>Experience: 1 year 1 month</li>
            </ul>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default Freelancer;
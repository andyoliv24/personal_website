import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import StAgustinePicture from '../../../images/StAgustineCollegePicture.png';

const Staugustine = () => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem", "margin-top": "2rem" }}>
        <MDBCardImage className="img-fluid" src={StAgustinePicture} waves style={{ height: "20rem"}} />
        <MDBCardBody>
          <MDBCardTitle>St. Augustine College</MDBCardTitle>
          <MDBCardText>
            <ul>
              <li>GPA: 4.0</li>
              <li>Degree: A.S Computer Information Systems</li>
              <li>Field: Software Development</li>
              <li>Graduation Date: 12/05/2018</li>
            </ul>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default Staugustine;
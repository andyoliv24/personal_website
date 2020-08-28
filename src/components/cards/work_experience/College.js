import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import MathPicture from '../../../images/MathPicture.jpg';


const College = () => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem", "margin-top": "2rem", "margin-bottom": "2rem"  }} >
        <MDBCardImage className="img-fluid" src={MathPicture} waves style={{ height: "15rem", width: "22rem"}} />
        <MDBCardBody>
          <MDBCardTitle>Math Tutor</MDBCardTitle>
          <MDBCardText>
            <ul>
              <li>Role: Math tutor</li>
              <li>Duties: Aid students when stuck in a math problem</li>
              <li>Experience: 4 months</li>
              <br></br>
            </ul>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default College;
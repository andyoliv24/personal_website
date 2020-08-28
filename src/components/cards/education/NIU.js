import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import NiuImage from '../../../images/NIUPicture.jpg';

const NIU = () => {
  return (
    <MDBCol>
      <MDBCard class="mb-4" style={{ width: "22rem", "margin-top": "2rem"}}>
        <MDBCardImage className="img-fluid" 
        src={NiuImage} waves
        style={{ height: "15rem", width: "22rem"}} />
        <MDBCardBody>
          <MDBCardTitle>Northern Illinois University</MDBCardTitle>
          <MDBCardText>
            <ul>
              <li>Current GPA: 3.245</li>
              <li>Degree: B.S Computer Science</li>
              <li>Field: Software Development</li>
              <li>Graduation Date: 12/13/2020</li>
              <br></br>
            </ul>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default NIU;
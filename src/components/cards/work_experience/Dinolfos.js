import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import KitchenPicture from '../../../images/KitchenPicture.webp';

const Dinolfos = () => {
  return (
    <MDBCol >
      <MDBCard style={{ width: "22rem", "margin-top": "2rem", "margin-bottom": "2rem"  }}>
        <MDBCardImage className="img-fluid" src={KitchenPicture} waves style={{ height: "15rem", width: "22rem"}} />
        <MDBCardBody>
          <MDBCardTitle>Busboy</MDBCardTitle>
          <MDBCardText>
            <ul>
              <li>Role: Busboy</li>
              <li>Duties: Help waitresses serve food</li>
              <li>Experience: 3 years</li>
              <br></br>
              <br></br>
            </ul>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default Dinolfos;
import React from "react";
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardTitle, MDBCardImage, MDBCardBody, MDBCardText } from "mdbreact";
import TravelCodeImage from '../images/travelcode.png'


const AboutMe = () => {
  return (
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="text-center">
            <MDBCardTitle className="card-title h4 pb-2">
              <strong>Andy Olivares</strong>
            </MDBCardTitle>

            <MDBCardImage
              src={TravelCodeImage}
              className="img-fluid"
            />
            <MDBCardBody>
              <MDBCardTitle className="indigo-text h5 m-4">
                About Me :)
              </MDBCardTitle>
              <MDBCardText>
                Traveling is one of my favorite hobbies along with coding. I'm a very friendly person, I make friends easily.
                One of the things a love about coding is that I can solve problems with the help of my fellow programmers. Working
                in teams is what I like.
              </MDBCardText>

              <MDBCol className="d-flex justify-content-center mt-4" md="12">
                <MDBCol md="3" className="d-flex justify-content-around">
                  <a href="https://www.linkedin.com/in/andy-olivares-a66263166/"><MDBIcon
                    fab
                    icon="linkedin-in"
                    className="grey-text"
                    size="lg"
                  /></a>
                  <a href="https://github.com/andyoliv24"><MDBIcon
                    fab
                    icon="github"
                    className="grey-text"
                    size="lg"
                  /></a>
                </MDBCol>
              </MDBCol>

            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default AboutMe;
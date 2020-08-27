import React from "react";
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";

const Languages = () => {
  return (
      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5">
          Technologies I know...
        </h2>
        <p className="lead grey-text w-responsive mx-auto mb-5">
          Below are a few technologies I've worked with in the real world.
        </p>
        <MDBRow>
          <MDBCol md="4">
            <MDBIcon fab icon="react" size="3x" className="blue-text" />
            <h5 className="font-weight-bold my-4">React JS</h5>
            <p className="grey-text mb-md-0 mb-5">
                Experience using React as Frontend Framework.
            </p>
          </MDBCol>
          <MDBCol md="4">
            <MDBIcon fab icon="java" size="3x" className="orange-text" />
            <h5 className="font-weight-bold my-4">Java</h5>
            <p className="grey-text mb-md-0 mb-5">
                Experience using java and spring boot as a backend.
            </p>
          </MDBCol>
          <MDBCol md="4">
            <MDBIcon fab icon="python" size="3x" className="blue-text" />
            <h5 className="font-weight-bold my-4">Python</h5>
            <p className="grey-text mb-md-0 mb-5">
                Experience using python for websites.
            </p>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol md="4">
            <MDBIcon fab icon="html5" size="3x" className="blue-text" />
            <h5 className="font-weight-bold my-4">HTML5</h5>
            <p className="grey-text mb-md-0 mb-5">
                Experience using HTML5 building complex websites.
            </p>
          </MDBCol>
          <MDBCol md="4">
            <MDBIcon fab icon="css3" size="3x" className="orange-text" />
            <h5 className="font-weight-bold my-4">CSS</h5>
            <p className="grey-text mb-md-0 mb-5">
                Experience using CSS and Sass for styling.
            </p>
          </MDBCol>
          <MDBCol md="4">
            <MDBIcon fab icon="node-js" size="3x" className="green-text" />
            <h5 className="font-weight-bold my-4">Node JS</h5>
            <p className="grey-text mb-md-0 mb-5">
                Experience using JavaScript with Node JS as a backend.
            </p>
          </MDBCol>
        </MDBRow>
      </section>
  );
}

export default Languages;
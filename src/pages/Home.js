import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import NiuCard from '../components/cards/education/NIU';
import StAugustineCard from '../components/cards/education/Staugustine';
import CollegeCard from '../components/cards/work_experience/College';
import DiscoverCard from '../components/cards/work_experience/Discover';
import FreelancerCard from '../components/cards/work_experience/Freelancer';
import ProgrammingLang from '../components/Languages';
import AboutMe from '../pages/AboutMe';
import '../css/Cards.css';


const Home = () => {

  return (
    <>
            <h2 className="h1-responsive font-weight-bold my-5 text-center my-5">
          Education
        </h2>
  <MDBContainer className="d-flex justify-content-center">

    <MDBRow>
      <MDBCol md="6"><NiuCard/></MDBCol>
      <MDBCol md="6"><StAugustineCard/></MDBCol>
    </MDBRow>
  </MDBContainer>
  <hr>
  </hr>

  <MDBContainer>
        <h2 className="h1-responsive font-weight-bold my-5 text-center my-5">
          Job Experience
        </h2>
    <MDBRow between>
        <MDBCol md="4" ><DiscoverCard/></MDBCol>
        <MDBCol md="4" ><FreelancerCard/></MDBCol>
        <MDBCol md="4" ><CollegeCard/></MDBCol>
    </MDBRow>
  </MDBContainer>


<hr></hr>


  <MDBContainer>
    <ProgrammingLang/>
  </MDBContainer>

  <MDBContainer>
    <AboutMe/>
  </MDBContainer>
  
  </>
  );
}

export default Home;
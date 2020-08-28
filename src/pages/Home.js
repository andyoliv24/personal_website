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
    
  <MDBContainer >
        <h2 className="h1-responsive font-weight-bold my-5 text-center my-5">
          Education
        </h2>
    <MDBRow>
      <MDBCol lg="6" md="6" className='mb-lg-0 mb-3'><NiuCard/></MDBCol>
      <MDBCol lg="6" md="6" className='mb-lg-0 mb-3'><StAugustineCard/></MDBCol>
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
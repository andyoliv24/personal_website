import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import NiuCard from '../components/cards/education/NIU';
import StAugustineCard from '../components/cards/education/Staugustine';
import CollegeCard from '../components/cards/work_experience/College';
import DinolfosCard from '../components/cards/work_experience/Dinolfos';
import DiscoverCard from '../components/cards/work_experience/Discover';
import FreelancerCard from '../components/cards/work_experience/Freelancer';
import ProgrammingLang from '../components/Languages';

const Home = () => {

  return (
    <>
  <MDBContainer>
    <MDBRow>
      <MDBCol md="6"><NiuCard/></MDBCol>
      <MDBCol md="6"><StAugustineCard/></MDBCol>
    </MDBRow>
    <MDBRow>
      <MDBCol ><DiscoverCard/></MDBCol>
      <MDBCol ><FreelancerCard/></MDBCol>
      <MDBCol ><CollegeCard/></MDBCol>
      <MDBCol ><DinolfosCard/></MDBCol>
    </MDBRow>
  </MDBContainer>
  <MDBContainer><ProgrammingLang/></MDBContainer>
  
  </>
  );
}

export default Home;
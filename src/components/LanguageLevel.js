import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import LanguageLevel from './core/ProgressBar';
import JavaScriptLogo from '../images/programmingIcon/JSLogo.png';
import CLogo from '../images/programmingIcon/CLogo.jpg';
import PythonLogo from '../images/programmingIcon/pythonLogo.png';
import PHPLogo from '../images/programmingIcon/phpLogo.png';
import JavaLogo from '../images/programmingIcon/JavaLogo.png';
import SwiftLogo from '../images/programmingIcon/swiftLogo.png';
import NodeJsLogo from '../images/programmingIcon/nodeLogo.jpg';
import SpringLogo from '../images/programmingIcon/springLogo.png';
import DjangoLogo from '../images/programmingIcon/djangoLogo.png';
import HTMLLogo from '../images/programmingIcon/HTMLLogo.png';
import CSSLogo from '../images/programmingIcon/CSSLogo.png';
import BootstrapLogo from '../images/programmingIcon/bootstrapLogo.gif'

class MasksPage extends React.Component {
  render() {
    return (
      <MDBContainer className="mt-5">
        <h4 className="text-center"> Programming Languages</h4>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={JavaScriptLogo} className="img-fluid z-depth-1" alt="" style={{height:"8rem", width:"10rem"}}/>
            <LanguageLevel level="100"/>
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-4">
            <img src={CLogo} className="img-fluid z-depth-1-half"
              alt=""  style={{height:"8rem", width:"10rem"}}/>
              <LanguageLevel level="70"/>
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-4">
            <img src={PythonLogo} className="img-fluid z-depth-2" alt=""  style={{height:"8rem", width:"10rem"}}/>
            <LanguageLevel level="80"/>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={PHPLogo} className="img-fluid z-depth-3" alt="" style={{height:"8rem", width:"10rem"}}/>
            <LanguageLevel level="60"/>
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-4">
            <img src={JavaLogo} className="img-fluid z-depth-4" alt="" style={{height:"8rem", width:"10rem"}}/>
            <LanguageLevel level="85"/>
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-4">
            <img src={SwiftLogo} className="img-fluid z-depth-5" alt="" style={{height:"8rem", width:"10rem"}}/>
            <LanguageLevel level="35"/>
          </MDBCol>
        </MDBRow>
        <hr></hr>
        <h4 className="text-center"> Technologies/Frameworks</h4>
        <MDBRow>
        
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={NodeJsLogo} className="img-fluid z-depth-3" alt="" style={{height:"8rem", width:"10rem"}}/>
            <LanguageLevel level="90"/>
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-4">
            <img src={SpringLogo} className="img-fluid z-depth-4" alt="" style={{height:"8rem", width:"10rem"}}/>
            <LanguageLevel level="90"/>
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-4">
            <img src={DjangoLogo} className="img-fluid z-depth-5" alt="" style={{height:"8rem", width:"10rem"}}/>
            <LanguageLevel level="60"/>
          </MDBCol>
        </MDBRow>

        <h4 className="text-center"> Markup Language/ Styling</h4>
        <MDBRow>
        
          <MDBCol lg="4" md="12" className="mb-4">
            <img src={HTMLLogo} className="img-fluid z-depth-3" alt="" style={{height:"8rem", width:"10rem"}}/>
            <LanguageLevel level="100"/>
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-4">
            <img src={CSSLogo} className="img-fluid z-depth-4" alt="" style={{height:"8rem", width:"10rem"}}/>
            <LanguageLevel level="95"/>
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-4">
            <img src={BootstrapLogo} className="img-fluid z-depth-4" alt="" style={{height:"8rem", width:"10rem"}}/>
            <LanguageLevel level="95"/>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default MasksPage;

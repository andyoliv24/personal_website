import React from "react";
import { MDBProgress } from 'mdbreact';

const ProgressBarPage = (props) => {
  return (
    <>
      <MDBProgress material value={props.level} height="20px">
        {props.level}%
      </MDBProgress>
    </>
  );
}

export default ProgressBarPage;
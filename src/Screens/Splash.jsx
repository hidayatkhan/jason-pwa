import React  from 'react';
import { ClockLoader } from 'react-spinners';
import {Row} from 'antd'
// Importing loader

const Splash = () => {
  // Custom css for loader
  const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
  `;
    return  (
      <>
      <Row type="flex" justify="center" align="middle" style={{minHeight: '90vh'}}>
      <ClockLoader color={'#A5BECC'} css={override} size={100} /> 
      </Row>
      </>
      )
}

export default Splash;
import React from 'react';
import Row from "react-bootstrap/Row";


const AlertMsg = ({initialLoad}) => {
  if (initialLoad) {
    return <Row className="text-center"><h3 className="my-5 text-muted">Welcome! Please enter a GitHub Username to start!</h3></Row>;
  }
  return <Row className="text-center"><h2 className="my-5 text-muted">User could not`t be found. Please try again!</h2></Row>;
};

export default AlertMsg;

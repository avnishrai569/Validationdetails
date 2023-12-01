
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Card } from "react-bootstrap";


const Final = ({ values }) => {


  const { firstName, lastName, age, email } = values;
  return (
    <>
        {/* <p className="sty">Paymet recieved !!</p> */}
      <Card style={{ marginTop: 100 }}>
          <p className="sty">Paymet recieved !!</p>
        <Card.Body>
          <p>
            <strong>First Name :</strong> {firstName}{" "}
          </p>
          <p>
            <strong>Last Name :</strong> {lastName}{" "}
          </p>
          <p>
            <strong>Address :</strong> {age}{" "}
          </p>
          <p>
            <strong>Email :</strong> {email}{" "}
          </p>
        </Card.Body>
      </Card>
    </>
  );
};

export default Final;

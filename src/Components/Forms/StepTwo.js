
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";

const StepTwo = ({ nextStep, handleFormData, prevStep, values }) => {

  const [error, setError] = useState(false);

  const submitFormData = (e) => {
    e.preventDefault();

    if (validator.isEmpty(values.Credit) || validator.isEmpty(values.security)) {
      setError(true);
    } else {
      nextStep();
    }
    console.log(handleFormData);
    console.log(values);
  };
  return (
    <>
      <Card style={{ marginTop: 100 }}>
        <p className="sty">Payment Methods</p>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label>Credit Card Number</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="text"
                name="Credit"
                placeholder="Credit Card Number"
                maxLength="16"
                onChange={handleFormData("Credit")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Security Code</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="security"
                type="text"
                placeholder="CVC"
                maxLength="3"
                onChange={handleFormData("security")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Card Expiration</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="card"
                type="text"
                placeholder="MM/YYYY"
                maxLength="7"
                onChange={handleFormData("card")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Recieved OTP</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="password"
                name="otp"
                placeholder="OTP"
                maxLength="4"
                onChange={handleFormData("otp")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>            
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button variant="primary" onClick={prevStep}>
                Previous
              </Button>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default StepTwo;

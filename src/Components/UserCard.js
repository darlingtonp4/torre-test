import React from "react";
import { Row, Container, Spinner } from "react-bootstrap";
import "./UserCard.css";
import { useState, useEffect } from "react";
const UserCard = ({ result }) => {
  let [user, setUser] = useState(result);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setUser(result);
    setInterval(() => setLoading(false), 1500);
    console.log(user);
  });
  if (loading) {
    return (
      <div className="spinner-container">
        {" "}
        <Spinner animation="grow" variant="info" />
      </div>
    );
  } else {
    return (
      <Container className="user-card-container">
        <Row className="image-container">
          <img
            src={result.picture}
            alt=""
            className="user-card-image mx-auto"
          ></img>
        </Row>
        <Row className="mx-auto">
          <h5>{result.name}</h5>
        </Row>
        <Row className="mx-auto">
          <p>{result.professionalHeadline}</p>
          <h4>{result.locationName} </h4>
        </Row>
      </Container>
    );
  }
};

export default UserCard;

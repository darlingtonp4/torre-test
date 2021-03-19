import React, { useState, useEffect } from "react";
import { ProgressBar, Row, Col, Container, Spinner } from "react-bootstrap";
import "./Profile.css";
import JobCard from "../Components/JobCard";
import EducationCard from "../Components/EducationCard";

const Profile = ({ usuario }) => {
  let [perfil, setPerfil] = useState(usuario);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setPerfil(usuario);
    setInterval(() => setLoading(false), 1800);
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
      <>
        <Container className="profile-container">
          <Row className="mx-auto">
            <Col sm={12} md={2} lg={3}>
              <img
                src={perfil.person.picture}
                height="110vh"
                width="110vh"
                className="foto-perfil px-auto"
              ></img>
              <h4>{perfil.person.name}</h4>
              <h5>{perfil.person.professionalHeadline} </h5>
              <p>{perfil.person.location.shortName}</p>
              <div>
                <h5>Languages:</h5>
                {perfil.languages.map((item) => (
                  <h6>{item.language}</h6>
                ))}
              </div>
            </Col>
            <Col sm={12} md={5} lg={5}>
              <h3>Personality</h3>
              {perfil.personalityTraitsResults.analyses.map((trait) => (
                <div className="traits">
                  {" "}
                  <h5>{trait.groupId} </h5>{" "}
                  <ProgressBar
                    striped
                    variant="info"
                    now={trait.analysis * 20}
                    className="mb-2"
                  />
                </div>
              ))}
            </Col>
            <Col sm={12} md={5} lg={4}>
              <h3>Jobs</h3>
              {perfil.jobs.map((job) => (
                <JobCard job={job} />
              ))}
              <h3 className="mt-3">Education</h3>
              {perfil.education.map((study) => (
                <EducationCard study={study} />
              ))}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
};

export default Profile;

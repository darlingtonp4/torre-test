import React, { useState, useEffect } from "react";
import { Row, Col, Container, Spinner } from "react-bootstrap";
import worker from "../Assets/jumbotron.svg";
import "./Home.css";
import UserCard from "../Components/UserCard";
const Home = () => {
  let [arrayMatch, setArrayMatch] = useState({});
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    const obtenerUsuario = async () => {
      const respuesta = await fetch(
        "https://search.torre.co/people/_search?currency=USD%24&page=0&periodicity=hourly&lang=es&size=4&aggregate=false&offset=0",
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/json;charset=UTF-8",
            "sec-ch-ua":
              '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site"
          },
          referrer: "https://torre.co/",
          referrerPolicy: "strict-origin-when-cross-origin",
          body:
            '{"and":[{"skill/role":{"text":"web developer","experience":"1-plus-year"}},{"location":{"term":"Honduras"}}]}',
          method: "POST",
          mode: "cors",
          credentials: "omit"
        }
      );
      const datos = await respuesta.json();
      setArrayMatch(datos);
      setInterval(() => setLoading(false), 1500);
    };
    obtenerUsuario();
    console.log(arrayMatch);
  }, []);
  if (loading) {
    return (
      <div className="spinner-container">
        {" "}
        <Spinner animation="grow" variant="info" />
      </div>
    );
  } else {
    return (
      <div>
        <Container className="hero">
          <Row>
            <Col
              xs={12}
              lg={5}
              md={6}
              className="text-search text-center my-auto"
            >
              <p className="header-text">
                The <b className="highlight-text"> perfect match </b>for you
                awaits
              </p>
            </Col>
            <Col xs={12} lg={7} md={6}>
              <img src={worker}></img>
            </Col>
          </Row>
        </Container>
        <Container className="suggestions">
          <Row>
            <h4>People near you</h4>
          </Row>

          <Row className="mx-auto ">
            {arrayMatch.results.map((result, index) => (
              <Col key={index} xs={6} lg={3} md={3}>
                <UserCard result={result} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
};

export default Home;

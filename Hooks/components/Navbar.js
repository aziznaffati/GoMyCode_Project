import React from "react";
import { Navbar, Container } from "react-bootstrap";
import Filter from "./Filter.js";
const Navbarr = ({ title, setTitle, rate, setRate }) => {
  return (
    <div>
      <Navbar bg="brown" variant="brown">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Filter
              title={title}
              setTitle={setTitle}
              rate={rate}
              setRate={setRate}
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarr;

import React, { useContext } from "react";
import imgLogo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img src={imgLogo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex align-items-center bg-light p-3">
        <Button variant="danger">Latest</Button>
        <Marquee speed={100}>
          I can be a React component, multiple React components, or just some
          text.................. I can be a React component, multiple React
          components, or just some text.
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;

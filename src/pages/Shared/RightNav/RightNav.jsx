import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import bg from "../../../assets/bg.png";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";

const RightNav = () => {
  return (
    <div>
      <div>
        <h4 className="fw-bolder mb-3">Login With</h4>
        <Button
          className="mb-2 w-100 d-flex justify-content-center align-items-center gap-2"
          variant="outline-primary"
        >
          <FaGoogle />
          Login With Google
        </Button>
        <Button variant="outline-dark w-100 d-flex justify-content-center align-items-center gap-2">
          <FaGithub></FaGithub> Login With Github
        </Button>
      </div>
      <div className="mt-5">
        <h4 className="fw-bolder mb-3">Find Us On</h4>
        <ListGroup>
          <ListGroup.Item className="d-flex py-3 align-items-center gap-2 text-secondary">
            <FaFacebook className="fs-5"></FaFacebook>{" "}
            <span className="fs-6 text-secondary fw-semibold">Facebook</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex py-3 align-items-center gap-2 text-secondary">
            <FaTwitter className="fs-5"></FaTwitter>{" "}
            <span className="fs-6 text-secondary fw-semibold">Twitter</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex py-3 align-items-center gap-2 text-secondary">
            <FaInstagram className="fs-5"></FaInstagram>{" "}
            <span className="fs-6 text-secondary fw-semibold">Instagram</span>
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div className="mt-3 position-relative">
        <img className="w-100" src={bg} alt="" />
        <div className="position-absolute text-white text-center top-50 start-50 translate-middle">
          <h2 className="fs-1 fw-bold">Create an Amazing Newspaper</h2>
          <p className="fs-5">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
          <Button variant="danger" className="rounded-0 fw-bolder fs-5">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;

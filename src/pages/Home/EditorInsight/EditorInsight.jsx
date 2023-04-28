import React from "react";
import imgOne from "../../../assets/1.png"
import imgTwo from "../../../assets/2.png"
import imgThree from "../../../assets/3.png"
import { Card, Col } from "react-bootstrap";
import { FaCalendar } from "react-icons/fa";

const EditorInsight = () => {
  return (
    <>
      <Col >
        <Card>
          <Card.Img variant="top" src={imgOne} />
          <Card.Body>
            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
            <Card.Text className="d-flex align-items-center gap-2 text-secondary">
             <FaCalendar></FaCalendar> <span>Jan 4, 2022</span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col >
        <Card>
          <Card.Img variant="top" src={imgTwo} />
          <Card.Body>
            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
            <Card.Text className="d-flex align-items-center gap-2 text-secondary">
             <FaCalendar></FaCalendar> <span>Jan 4, 2022</span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col >
        <Card>
          <Card.Img variant="top" src={imgThree} />
          <Card.Body>
            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
            <Card.Text className="d-flex align-items-center gap-2 text-secondary">
             <FaCalendar></FaCalendar> <span>Jan 4, 2022</span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      
    </>
  );
};

export default EditorInsight;

import React from "react";
import { Button, Card, Row } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorInsight from "../EditorInsight/EditorInsight";

const News = () => {
  const news = useLoaderData();
  const { _id, title, image_url, details, category_id } = news;

  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link
            className="text-decoration-none"
            to={`/category/${category_id}`}
          >
            <Button
              className="d-flex align-items-center gap-2"
              variant="danger"
            >
              <FaArrowLeft></FaArrowLeft> All news in this category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <div className="mt-5">
        <h2>Editors Insight</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          <EditorInsight></EditorInsight>
        </Row>
      </div>
    </div>
  );
};

export default News;

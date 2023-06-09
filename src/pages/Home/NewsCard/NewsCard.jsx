import moment from "moment";
import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const NewsCard = ({ news }) => {
  const { _id, title, image_url, details, author, rating, total_view } = news;
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex align-items-center">
        <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
        <div className="flex-grow-1">
          <p className="mb-0 ps-2">{author?.name}</p>
          <p className="mb-0 ps-2">
            <small>{moment(author?.published_date).format("yyyy-MM-D")}</small>
          </p>
        </div>
        <div>
          <FaRegBookmark></FaRegBookmark> <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...{" "}
              <Link to={`/news/${_id}`}>Reed More</Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex align-items-center">
        <p className="flex-grow-1 d-flex align-items-center">
          <Rating
            style={{ maxWidth: 100 }}
            value={rating?.number}
            readOnly
          />
          <span className="ms-2">{rating?.number}</span>
        </p>
        <p>
          <FaEye></FaEye> {total_view}
        </p>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;

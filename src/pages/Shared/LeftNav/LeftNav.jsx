import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import EditorInsight from "../../Home/EditorInsight/EditorInsight";

const LeftNav = () => {
  const [catagories, setCatagories] = useState([]);
  useEffect(() => {
    fetch("https://the-news-dragon-server-souravbsk.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCatagories(data))
      .catch((err) => {
      });
  }, []);
  return (
    <div>
      <h4 className="fw-bolder mb-3">All Caterogy</h4>
      <div>
        {catagories.map((category) => (
          <div key={category.id}>
            <p className="py-2 mb-0">
              <Link
                to={`/category/${category.id}`}
                className="text-decoration-none text-secondary px-3 fw-semibold"
              >
                {category.name}
              </Link>
            </p>
          </div>
        ))}
      </div>
      <Row xs={1} md={1} lg={1} className="g-4 mt-3">
        <EditorInsight></EditorInsight>
      </Row>
    </div>
  );
};

export default LeftNav;

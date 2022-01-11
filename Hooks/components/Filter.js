import React from "react";
import { Form } from "react-bootstrap";
import { Rate } from "antd";
import "./Filter.css";
const Filter = ({ title, setTitle, rate, setRate }) => {
  return (
    <div className="filter">
      <Form className="d-flex">
        <Form.Control
          type="text"
          placeholder="Searching Movies ..."
          className="me-6"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </Form>
      <span>
        <Rate onChange={(rate) => setRate(rate)} value={rate} />
      </span>
    </div>
  );
};

export default Filter;

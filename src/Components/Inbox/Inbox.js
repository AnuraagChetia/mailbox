import React from "react";
import { ListGroupItem, ListGroup } from "react-bootstrap";
const Inbox = (props) => {
  return (
    <div className="p-2 border border-dark m-2">
      <h1>INBOX</h1>
      <ListGroup as="ol" numbered>
        <ListGroupItem
          as="li"
          variant="info"
          action
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold"> Sender</div>
            Subject
            <span>Message</span>
          </div>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};
export default Inbox;

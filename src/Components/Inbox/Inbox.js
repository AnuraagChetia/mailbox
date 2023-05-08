import React from "react";
import { ListGroupItem, ListGroup } from "react-bootstrap";
const Inbox = (props) => {
  return (
    <div className="  p-2 border border-dark m-2">
      <h1>INBOX</h1>
      <ListGroup as="ol" numbered>
        {props.inbox &&
          props.inbox.map((mail) => (
            <ListGroupItem
              key={Math.random()}
              as="li"
              variant="info"
              action
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold"> {mail.sender}</div>
                {mail.subject}
                <span className="d-flex">{mail.message}</span>
              </div>
            </ListGroupItem>
          ))}
      </ListGroup>
    </div>
  );
};
export default Inbox;

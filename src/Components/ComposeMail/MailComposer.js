import React, { useRef, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Input from "../UI/Input";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";

const MailComposer = (props) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const mailRef = useRef();
  const subjectRef = useRef();

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const senderEmail = localStorage.getItem("email");
    let updatedSenderEmail = senderEmail.replace(/[^a-zA-Z ]/g, "");
    const enteredEmail = mailRef.current.value;
    const enteredSubject = subjectRef.current.value;
    const enteredMessage = editorState.getCurrentContent().getPlainText();
    const newMail = {
      sender: senderEmail,
      recipient: enteredEmail,
      subject: enteredSubject,
      message: enteredMessage,
    };
    let updatedEmail = enteredEmail.replace(/[^a-zA-Z ]/g, "");
    try {
      const res = await fetch(
        `https://movieapp-d6140-default-rtdb.asia-southeast1.firebasedatabase.app/mails/${updatedEmail}/inbox.json`,
        {
          method: "POST",
          body: JSON.stringify(newMail),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (res.ok) {
        fetch(
          `https://movieapp-d6140-default-rtdb.asia-southeast1.firebasedatabase.app/mails/${updatedSenderEmail}/sent.json`,
          {
            method: "POST",
            body: JSON.stringify(newMail),
            headers: { "Content-Type": "application/json" },
          }
        );
        alert("Email sent successfully");
      } else {
        throw new Error("Unable to send mail");
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <Container>
      <Form
        className="rounded p-4 p-sm-3 border border-primary w-sm-25 "
        style={{ margin: "3rem" }}
        onSubmit={formSubmitHandler}
      >
        <h1 style={{ marginBottom: "20px" }}>Compose</h1>
        <Input label="To:" type="text" ref={mailRef} id="mailId"></Input>
        <Input
          label="Subject:"
          type="text"
          ref={subjectRef}
          id="subject"
        ></Input>

        <div className="border border-light block">
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={setEditorState}
          />
        </div>
        <Button variant="primary" style={{ margin: "20px" }} type="submit">
          Send
        </Button>
      </Form>
    </Container>
  );
};
export default MailComposer;

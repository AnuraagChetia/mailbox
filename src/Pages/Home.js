import React from "react";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import MailComposer from "../Components/ComposeMail/MailComposer";
const Home = (props) => {
  return (
    <>
      <h1 className=" border-bottom border-dark p-2">WELCOME TO MAILBOX</h1>
      <MailComposer></MailComposer>
    </>
  );
};
export default Home;

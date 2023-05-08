import { useDispatch, useSelector } from "react-redux";
import Inbox from "../Components/Inbox/Inbox";
import { useEffect } from "react";
import { fetchInboxMail } from "../Store/custom-actions";

const InboxPage = (props) => {
  const dispatch = useDispatch();
  const inbox = useSelector((state) => state.mail.inbox);
  useEffect(() => {
    dispatch(fetchInboxMail());
  }, []);
  console.log(inbox);
  return <Inbox></Inbox>;
};
export default InboxPage;

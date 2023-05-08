import { mailActions } from "./mail-reducer";

export const fetchInboxMail = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const email = localStorage.getItem("email");
      let updatedEmail;
      if (email) {
        updatedEmail = email.replace(/[^a-zA-Z ]/g, "");
      }

      const response = await fetch(
        `https://movieapp-d6140-default-rtdb.asia-southeast1.firebasedatabase.app/mails/${updatedEmail}/inbox.json`
      );

      if (!response.ok) {
        throw new Error("Could not fetch inbox mails");
      }

      const data = await response.json();

      return data;
    };
    const data = await fetchData();
    let mails = Object.entries(data); //
    let inbox = mails.map((mail) => {
      return mail[1];
    });
    dispatch(mailActions.replaceMails({ inbox: inbox }));
    console.log(inbox);
  };
};

export const fetchSentMail = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const email = localStorage.getItem("email");
      let updatedEmail;
      if (email) {
        updatedEmail = email.replace(/[^a-zA-Z ]/g, "");
      }
      const response = await fetch(
        `https://movieapp-d6140-default-rtdb.asia-southeast1.firebasedatabase.app/mails/${updatedEmail}/sent.json`
      );

      if (!response.ok) {
        throw new Error("Could not fetch sent mails");
      }

      const data = await response.json();

      return data;
    };
    const data = await fetchData();
  };
};

import React from "react";
import ContactHeading from "./ContactHeading";
import GoogleMap from "./GoogleMap";
import SendMessage from "./SendMessage";

const Contact = () => {
  return (
    <div>
      <ContactHeading></ContactHeading>
      <SendMessage></SendMessage>
      <GoogleMap></GoogleMap>
    </div>
  );
};

export default Contact;

import React from "react";
import { Helmet } from "react-helmet-async";

function Contact() {
  return (
    <div>
      <Helmet>
        <title>Contact Page!</title>
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
      </Helmet>
      Contact
    </div>
  );
}

export default Contact;

import React from "react";
import { Helmet } from "react-helmet-async";
import AddSection from "../components/AddSection/AddSection";

function rf() {
  return (
    <>
      <Helmet>
        <title>Add Page!</title>
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
      </Helmet>
      <AddSection />
    </>
  );
}

export default rf;

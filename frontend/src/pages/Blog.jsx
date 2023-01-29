import React from "react";
import { Helmet } from "react-helmet-async";

function Blog() {
  return (
    <div>
      <Helmet>
        <title>Blog Page!</title>
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
      </Helmet>
      Blog
    </div>
  );
}

export default Blog;

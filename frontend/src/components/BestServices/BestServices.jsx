import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.scss";
function BestServices() {
  const URL = axios.create({
    baseURL: "http://localhost:8080",
  });
  const [posts, setPosts] = useState([]);
  const [filtered, setFiltered] = useState("");

  const getData = () => {
    URL.get("/services").then((response) => {
      setPosts(response.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  function handleFilter(e) {
    setFiltered(e.target.value);
  }

  const deletePost = async (id) => {
    await URL.delete(`/services/${id}`);
    setPosts(
      posts.filter((post) => {
        return post.id !== id;
      })
    );

    getData();
  };

  console.log(posts);
  return (
    <section className="services">
      <div className="container">
        <div className="best_services">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <hr
              style={{
                width: "10%",
                height: "2px",
                border: "none",
                background: "red",
              }}
            />
            <h3>OUR TOP SERVICES</h3>
          </div>
          <h1>Our Best Services</h1>
          <div style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
            <input
              type="text"
              placeholder="filter your data"
              onChange={handleFilter}
            />
          </div>
          <ul>
            {posts
              .filter((data) => {
                return filtered.trim().toLowerCase() === ""
                  ? data
                  : data.name.toLowerCase().includes(filtered.toLowerCase());
              })
              .map((post) => {
                return (
                  <li key={post._id}>
                    <img style={{ width: "40px" }} src={post.image} alt="img" />
                    <h2>{post.name}</h2>
                    <p>{post.information}</p>
                    <button onClick={() => deletePost(post._id)}>delete</button>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default BestServices;

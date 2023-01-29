import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { postFormSchema } from "../../schema/formScehema";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import "./style.scss";

function AddSection() {
  const [state, setState] = useState({
    name: "",
    information: "",
    image:""
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(postFormSchema) });

  const URL = axios.create({
    baseURL: "http://localhost:8080",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const addState = async () => {
    await URL.post("/services", state);
    setState({
      name: "",
      information: "",
      image:""
    });
  };

  const onSubmit = (data) => {
    console.log(data);
    addState();
  };

  return (
    <>
      <div className="form_wrapper">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name")}
            value={state.name}
            type="text"
            onChange={handleChange}
            name="name"
            placeholder="Name of Service"
            id="name"
          />
          {errors.name ? (
            <span style={{ color: "red" }}>{errors.name.message}</span>
          ) : (
            <></>
          )}
          <input
            {...register("image")}
            value={state.image}
            type="text"
            onChange={handleChange}
            name="image"
            placeholder="Image"
            id="image"
          />
          {errors.image ? (
            <span style={{ color: "red" }}>{errors.image.message}</span>
          ) : (
            <></>
          )}
          <input
            {...register("information")}
            value={state.information}
            type="text"
            onChange={handleChange}
            name="information"
            placeholder="Information"
            id="information"
          />
          {errors.category ? (
            <span style={{ color: "red" }}>{errors.category.message}</span>
          ) : (
            <></>
          )}
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default AddSection;

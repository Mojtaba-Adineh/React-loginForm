import { Formik, Form } from "formik";
import React, { Component, useEffect , useState } from "react";
import CustomInput from "./custom-input";
import { yupLoginSchema } from "../schemas/loginForm-schema";
import { useNavigate } from "react-router-dom";
import { ToastContainer , toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterForm = () => {
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    actions.resetForm();
    if (values) {
      toast.success("Registered!");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      navigate("/home")
    };
  };

  return (
    <React.Fragment>
      <ToastContainer/>
      <Formik
        initialValues={{
          username: "",
          password: "",
          confirmPassword: "",
        }}
        enableReinitialize
        validationSchema={yupLoginSchema}
        onSubmit={onSubmit}
      >
        {(props) => (
          <div className="login-card d-flex align-items-center justify-content-center">
            <Form className="inner-login-card d-flex flex-column">
              <CustomInput
                labelClass="fw-bold"
                name="username"
                value={props.values.username}
                id="usename"
                type="text"
                autoComplete="off"
              />
              <CustomInput
                labelClass="fw-bold"
                name="password"
                value={props.values.password}
                id="password"
                type="password"
                autoComplete="off"
              />
              <CustomInput
                labelClass="fw-bold"
                name="confirmPassword"
                value={props.values.confirmPassword}
                id="confirmPassword"
                type="password"
                autoComplete="off"
              />
              <button
                disabled={props.isSubmitting}
                className="btn btn-dark mt-2"
                type="submit"
              >
                Log in
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default RegisterForm;

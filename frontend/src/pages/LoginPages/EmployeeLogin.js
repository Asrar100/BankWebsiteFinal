import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Card } from "antd";
import { login } from "../../api/auth";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "../Images/Logo2.png";

export default function EmployeeLogin() {
  const customerRegSchema = Yup.object().shape({
    username: Yup.string().required(),
  });

  const navigate = useNavigate();

  const [loginError, setLoginError] = useState(false);

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values, "form submitted");
    setSubmitting(true);
    const loginDetails = {
      userName: values.username,
      password: values.password,
      role: "employee",
    };
    login({ loginDetails })
      .then((response) => {
        console.log(response, "here is the response");
        setSubmitting(false);
        if (response.auth === "success") {
          navigate("/employeePortal");
        }
      })
      .catch((error) => {
        console.log(error);
        setLoginError(true);
        setSubmitting(false);
      });
  };
  return (
    <div className="login-box">
      <div className="navbar">
        <img className="aruci--logo" src={Logo} onClick={() => navigate("/")} />
        <h1 className="topic">Employee Login</h1>
      </div>
      <Card
        hoverable
        title="LOG IN"
        style={{ width: 600 }}
        className="login--card"
      >
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={customerRegSchema}
          onSubmit={handleSubmit}
        >
          {(props) => {
            const errorInputStyle = {
              borderColor: "red",
            };
            return (
              <Form className="customer--reg--form">
                <span>
                  <Field
                    type="text"
                    name="username"
                    placeholder="Username"
                    style={
                      props.touched.name && props.errors.name
                        ? errorInputStyle
                        : null
                    }
                  />
                </span>
                <span>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </span>

                <Button
                  className="customer--reg--form--submit"
                  type="primary"
                  danger={loginError}
                  onClick={props.handleSubmit}
                  disabled={props.isSubmitting}
                >
                  Login
                </Button>
                {Object.values(props.touched).includes(true) &&
                  Object.values(props.errors).length !== 0 && (
                    <div className="customer--reg--form--errors">
                      <ErrorMessage name="username" component="div" />
                      <ErrorMessage name="password" component="div" />
                    </div>
                  )}
              </Form>
            );
          }}
        </Formik>
      </Card>
    </div>
  );
}

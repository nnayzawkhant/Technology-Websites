import React, { useState, useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import './login.css'
import img from '../assets/img/spinner.gif';

import { login } from "../redux/slices/authSlice";
import { clearMessage } from "../redux/slices/messageSlice";

const Login = () => {
  let navigate = useNavigate();

  const [type, setType]=useState('password');
  const [icon, setIcon]=useState(<VisibilityOffIcon/>);

  const handleToggle=()=>{    
		if(type==='password'){
		setIcon(<RemoveRedEyeIcon/>);      
		setType('text');
		}
		else{
		setIcon(<VisibilityOffIcon/>);     
		setType('password');
		}
	}

  const { isFetching } = useSelector((state) => state.auth);

  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("This is not a valid email.")
      .required("This field is required!"),
    password: Yup.string()
      .test(
        "len",
        "The password must be between 6 and 40 characters.",
        (val) =>
          val &&
          val.toString().length >= 6 &&
          val.toString().length <= 40
      )
      .required("This field is required!"),
  });

  const handleLogin = (formValue) => {
    const { email, password } = formValue;

    dispatch(login({ email, password }))
      .unwrap()
      .then(() => {
        navigate("/admin/dashboard/");
        // window.location.reload();
      })
  };



  return (
    <div className="login-form">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          <Form >
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field name="email" type="text" className="form-control" />
              <ErrorMessage
                name="email"
                component="div"
                className="alert alert-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="pass-group">
                <Field name="password" type={type} className="" />
                <span onClick={handleToggle}>{icon}</span>
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="alert alert-danger"
              />
            </div>
            {message && (
              <div className="form-group">
                <div className="alert-messager" role="alert">
                  {message}
                </div>
              </div>
            )}

            <div className="form-group">
              <button type="submit" className=" btn-block" >
                {isFetching ? (
                  <img src={img} className="load__img"/>) : (<span>Login</span>)
                }
                
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
// library
import React from "react";
import { ErrorMessage, Field, Formik, Form } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
// components
import LoginIlustrate from "../../assets/Illustrasi Login.png";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../app/useSlicer/user";
const LoginPage = () => {
  // variables
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputAtribute = [
    {
      name: "email",
      icon: "#",
      placeholder: "masukkan email anda",
      type: "text",
    },

    {
      name: "password",
      icon: "#",
      placeholder: "masukkan password anda",
      type: "password",
    },
  ];
  const initialValues = {
    email: "",
    password: "",
  };
  // functions
  const validationSchema = yup.object().shape({
    email: yup.string().required("Tolong masukkan email dengan benar").email(),
    password: yup
      .string()
      .required()
      .min(8, "Password harus minimal memiliki 8 karakter"),
  });

  const handleSubmit = async (values) => {
    const { email, password } = values;
    try {
      const response = await axios({
        method: "post",
        url: "https://take-home-test-api.nutech-integrasi.app/login",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        data: values,
      });
      const { data, status } = response;

      if (status === 200) {
        alert(data.message);
        localStorage.setItem("token", data.data.token);
        dispatch(
          login({
            email,
            password,
            token: data.data.token,
            isLoggin: true,
          })
        );
     

        navigate("/home");
      } else {
        alert("gagal login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" flex flex-row justify-between pt-10 h-screen  items-center overflow-hidden container">
      <div className="w-1/2 flex flex-col  text-center items-center">
        <div className="text-lg font-bold text-slate-700">
          <div className="font-thin text-base mb-4">SIMS PPOB</div>
          <div className="mb-10">Masuk atau buat akun untuk memulai</div>
        </div>
        {/* form */}

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form className="flex flex-col gap-10 w-[500px]">
            {inputAtribute.map((item, i) => (
              <div key={i}>
                <Field
                  name={item.name}
                  type={item.type}
                  placeholder={item.placeholder}
                  className="input input-bordered rounded-none w-full"
                />
                <ErrorMessage
                  name={item.name}
                  component="span"
                  className="text-error "
                />
              </div>
            ))}
            <button
              type="submit"
              className="btn rounded-none bg-red-500 text-white"
            >
              Masuk
            </button>
          </Form>
        </Formik>
        <div className="mt-10">
          belum punya akun? registrasi
          <span className="text-red-600">
            <Link to={"/registration"}> di sini</Link>
          </span>
        </div>
      </div>
      <div className="w-1/2">
        <img className="h-full w-full " src={LoginIlustrate} />
      </div>
    </div>
  );
};

export default LoginPage;

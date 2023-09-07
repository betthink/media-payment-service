// library
import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
// components
import LoginIlustrate from "../../assets/Illustrasi Login.png";
import { axiosInstance } from "../../utils/axiosInstance";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const RegistrationPage = () => {
  // variables
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  };
  const inputAtribute = [
    {
      name: "email",
      icon: "#",
      placeholder: "masukkan email anda",
      type: "text",
    },
    {
      name: "firstName",
      icon: "#",
      placeholder: "masukkan nama depan anda",
      type: "text",
    },
    {
      name: "lastName",
      icon: "#",
      placeholder: "masukkan nama belakang anda",
      type: "text",
    },
    {
      name: "password",
      icon: "#",
      placeholder: "buat password anda",
      type: "password",
    },
    {
      name: "confirmPassword",
      icon: "#",
      placeholder: "konfirmasi password anda",
      type: "password",
    },
  ];
  const validationSchema = yup.object().shape({
    email: yup.string().required("Tolong masukkan email dengan benar").email(),
    firstName: yup.string().required("Nama depan harus diisi"),
    lastName: yup.string().required("Nama belakang harus diisi"),
    password: yup
      .string()
      .required()
      .min(8, "Password harus minimal memiliki 8 karakter"),
    confirmPassword: yup
      .string()
      .required("Konfirmasi password harus diisi")
      .oneOf([yup.ref("password"), null], "Password harus cocok"),
  });

  // functions

  const handleRegistration = async (values) => {
    console.log(values);
    try {
      const { email, firstName, lastName, password } = values;
      const response = await axios({
        method: "post",
        url: "https://take-home-test-api.nutech-integrasi.app/registration",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        data: {
          email: email,
          first_name: firstName,
          last_name: lastName,
          password: password,
        },
      });
      const { data, status } = response;
      if (status === 200) {
        alert(data.message);
        navigate("/login");
      } else {
        alert("gagal registrasi");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-row justify-between  h-screen overflow-hidden container ">
      <div className="w-1/2 flex flex-col justify-center text-center items-center">
        <div className="text-lg font-bold text-slate-700">
          <div className="font-thin text-base mb-4">SIMS PPOB</div>
          <div className="mb-10">Lengkapi Data Untuk Membuat Akun</div>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleRegistration}
          validationSchema={validationSchema}
        >
          <Form className="flex flex-col gap-6 w-[500px]">
            {inputAtribute.map((item, i) => (
              <div className="" key={i}>
                <Field
                  name={item.name}
                  type={item.type}
                  placeholder={item.placeholder}
                  className="input input-bordered  rounded-none w-full"
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
      </div>
      <div className="w-1/2">
        <img className="h-full w-full  " src={LoginIlustrate} alt="Illustrasi" />
      </div>
    </div>
  );
};

export default RegistrationPage;

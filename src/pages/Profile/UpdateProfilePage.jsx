// library
import React, { useEffect, useState } from "react";
import { MdOutlineAlternateEmail, MdPerson } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
// components
import Navbar from "../../components/Navbar";
import { ProfileFoto } from "../../components/Image/Images";
import OutlineButton from "../../components/Button/OutlineButton";
import { RedButton } from "../../components/Button/RedButton";
import ListWithLabel from "../../components/List/ListWithLabel";

import TextInput from "../../components/Form/TextInput";
import TextInputWithLabel from "../../components/Form/TextInputWithLabel";
import { IoPencilOutline } from "react-icons/io5";
import axios from "axios";

const UpdateProfilePage = () => {
  // variable
  const { state } = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const initialValues = {
    email: state.email,
    firstName: state.firstName,
    lastName: state.lastName,
  };
  const validationSchema = yup.object().shape({
    email: yup.string().required("Tolong masukkan email dengan benar").email(),
    firstName: yup.string().required("Nama depan harus diisi"),
    lastName: yup.string().required("Nama belakang harus diisi"),
  });
  // functions
  const handleUpdate = async (values) => {
    // console.log(values);
    const { email, firstName, lastName } = values;
    try {
      const response = await axios({
        method: "put",
        url: "https://take-home-test-api.nutech-integrasi.app/profile/update",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
          first_name: firstName,
          last_name: lastName,
        },
      });
      console.log(response);
      const { data, status } = response;
      if (status === 200) {
        alert(data.message);
        navigate("/profile");
      } else {
        alert("gagal registrasi");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, []);
  return (
    <div>
      <Navbar />
      <div className=" w-[900px] container justify-center flex flex-col py-6">
        {/* profile img */}
        <div className=" flex flex-col justify-center items-center w-full">
          <button className="relative" type="button">
            <img
              className="min-w-[120px]"
              src={
                state?.profile_image !==
                "https://minio.nutech-integrasi.app/take-home-test/null"
                  ? state.profile_image
                  : ProfileFoto
              }
              alt="Profile Foto"
            />
            <span className="absolute bottom-0 right-0 border rounded-full p-1">
              <IoPencilOutline size={12} />
            </span>
          </button>
          <div className="font-bold text-2xl flex flex-row gap-2">
            <span>{state?.firstName} </span>
            <span> {state?.lastName} </span>
          </div>
        </div>
        {/* form */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleUpdate}
        >
          <Form
            className="flex flex-col gap-6
          "
          >
            {/* text Input */}
            {/* Email */}
            <div className="">
              <label className="label">
                <span className="label-text">email</span>
              </label>
              <Field
                disabled
                name="email"
                placeholder="Masukkan email anda "
                className="input input-bordered  rounded-none w-full"
              />
              <ErrorMessage
                name="email"
                component="span"
                className="text-error "
              />
            </div>
            {/* first name */}
            <div className="">
              <label className="label">
                <span className="label-text">nama depan</span>
              </label>
              <Field
                name="firstName"
                placeholder="Masukkan nama depan"
                className="input input-bordered  rounded-none w-full"
              />
              <ErrorMessage
                name="firstName"
                component="span"
                className="text-error "
              />
            </div>
            {/* last name */}
            <div className="">
              <label className="label">
                <span className="label-text">nama belakang</span>
              </label>
              <Field
                name="lastName"
                placeholder="Masukkan nama belakang"
                className="input input-bordered  rounded-none w-full"
              />
              <ErrorMessage
                name="lastName"
                component="span"
                className="text-error "
              />
            </div>
            <button
            
              type="submit"
              className="btn rounded-none bg-red-500 text-white"
            >
              Simpan
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default UpdateProfilePage;

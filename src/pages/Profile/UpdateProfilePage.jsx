// library
import React, { useEffect, useState } from "react";
import { MdOutlineAlternateEmail, MdPerson } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
// components
import Navbar from "../../components/Navbar";
import { ProfileFoto } from "../../components/Image/Images";

import { IoPencilOutline } from "react-icons/io5";
import axios from "axios";
import { tokenLocal } from "../../global/token";
import { axiosInstance } from "../../utils/axiosInstance";

const UpdateProfilePage = () => {
  // variable
  const { state } = useLocation();
  const navigate = useNavigate();
  const [dataImage, setdataImage] = useState(null);
  const [isUpload, setisUpload] = useState(false);
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
    const { firstName, lastName } = values;
    try {
      const response = await axiosInstance("/profile/update", {
        method: "put",
        headers: {
          Authorization: `Bearer ${tokenLocal}`,
        },
        data: {
          first_name: firstName,
          last_name: lastName,
        },
      });
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
  const handleOnchangeImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      setdataImage(file);
      setisUpload(true);
    }
  };
  const handleUploadImage = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("keterangan", "Ini adalah gambar profile");

      const response = await axiosInstance.put("/profile/image",
        formData,
        {
          headers: {
            accept: "application/json",
            "Content-Type": "multipart/form-data",
            Authorization: `Barier ${tokenLocal}`,
          },
        }
      );
      const { status, data } = response;
      if (status === 200) {
        alert(data.message);
        return response.data;
      }
    } catch (error) {
      console.error("Gagal upload file", error);
      throw error;
    }
  };
  const handleOpenModal = () => {
    document.getElementById("my_modal_5").showModal();
  };

  return (
    <div>
      <Navbar />
      <div className=" w-[900px] container justify-center flex flex-col py-6">
        {/* profile img */}
        <div className=" flex flex-col justify-center items-center w-full">
          <label htmlFor="fileInput" className="relative">
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleOnchangeImage}
            />
            <img
              className="w-[100px] h-[100px] rounded-full"
              src={
                dataImage ? URL.createObjectURL(dataImage) : state?.profile_image
              }
              alt="Profile Foto"
            />
            <span className="absolute bottom-0 right-0 border rounded-full p-1">
              <IoPencilOutline size={12} />
            </span>
          </label>
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
      {/* modal */}
      <>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-green-600">Konfirmasi!</h3>
            <p className="py-4">
              Anda yakin ingin mengganti foto profile anda?
            </p>
            <div className="modal-action ">
              <form
                method="dialog"
                className="flex flex-row justify-between w-full"
              >
                <button
                  onClick={() => handleUploadImage(dataImage)}
                  className="btn bg-green-600 hover:text-green-600 text-white text-sm"
                >
                  Yakin
                </button>
                <button
                  onClick={() => setdataImage(null)}
                  className="btn hover:text-redDominan bg-redDominan text-white text-sm"
                >
                  Batal
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </>
      {isUpload ? handleOpenModal() : null}
    </div>
  );
};

export default UpdateProfilePage;

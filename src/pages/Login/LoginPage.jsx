// library
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// components
import LoginIlustrate from "../../assets/Illustrasi Login.png";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../../utils/axiosInstance";
import { setIsLogin } from "../../app/features/user/user-slice";
import { Button, Form, Input, message as mes } from "antd";
const LoginPage = () => {
  // variables
  const navigate = useNavigate();
  const { firstName, lastName, isLoggin, isLoading } = useSelector(
    (state) => state.user
  );
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

  const handleLogin = async (values) => {
    console.log(values);
    try {
      const response = await axiosInstance("/login", {
        method: "post",
        data: values,
      });

      const { data, status } = response;
      if (status === 200) {
        mes.success(data.message);
        localStorage.setItem("token", data.data.token);

        dispatch(setIsLogin(true));
        navigate("/home");
      } else {
        console.log(data.message);
        mes.error("gagal loginn");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  useEffect(() => {
    // console.log({ firstName });
  }, []);
  return (
    <div className="  flex flex-col-reverse  md:flex-row justify-between pt-10 items-center md:h-screen overflow-hidden container">
      <div className="w-1/2 flex flex-col  text-center items-center">
        <div className="text-lg font-bold text-slate-700">
          <div className="font-thin text-base mb-4">SIMS PPOB</div>
          <div className="mb-10">Masuk atau buat akun untuk memulai</div>
        </div>
        {/* form */}

        <Form onFinish={handleLogin} className="flex flex-col gap-10 w-[500px]">
          {inputAtribute.map((item, i) => (
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "field tidak bole kosong",
                },
              ]}
              name={item.name}
            >
              <Input
                type={item.type}
                placeholder={item.placeholder}
                className="input input-bordered rounded-none w-full"
              />
            </Form.Item>
          ))}
          <Form.Item>
            <Button
              block
              htmlType="submit"
              className="btn rounded-none bg-red-500 text-white"
            >
              Masuk
            </Button>
          </Form.Item>
        </Form>
        <div className="mt-10">
          belum punya akun? registrasi
          <span className="text-red-600">
            <Link to={"/registration"}> di sini</Link>
          </span>
        </div>
      </div>
      <div className="w-1/2 hidden md:flex">
        <img className="md:h-full md:w-full" src={LoginIlustrate} />
      </div>
    </div>
  );
};

export default LoginPage;

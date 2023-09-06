import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Saldo from "../../components/Saldo";
import SubmitButton from "../../components/Button/SubmitButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TopUpPage = () => {
  // variables
  const token = localStorage.getItem("token");
  const [price, setPrice] = useState(0);
  const [dataSaldo, setdataSaldo] = useState([
    { message: "", balance: "", isLoad: false },
  ]);
  const navigate = useNavigate();
  const dataPriceSelection = [
    { price: "10.000", value: 10000 },
    { price: "20.000", value: 20000 },
    { price: "50.000", value: 50000 },
    { price: "100.000", value: 100000 },
    { price: "250.000", value: 250000 },
    { price: "500.000", value: 500000 },
  ];
  // functions
  const handleSubmitTopUp = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://take-home-test-api.nutech-integrasi.app/topup",
        {
          top_up_amount: parseInt(price),
        },
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { status, data } = response;
      console.log(data.data);
      if (status === 200) {
        alert(data.message, data.balance);
        setdataSaldo((prevData) => {
          const newData = [...prevData];
          newData[0] = {
            ...newData[0],
            message: data.message,
            balance: data.balance,
            isLoad: true,
          };
        });
      } else {
        alert("network error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getValuePrice = (value) => {
    setPrice(value);
  };
  useEffect(() => {});
  return (
    <div className="h-screen">
      <Navbar />
      <Saldo />
      <div className="container my-10">
        <p>Sihlakan masukkan </p>
        <p className="font-bold text-2xl">Nominal Top Up </p>
      </div>
      <div className="flex flex-row w-full container gap-6 justify-between">
        <form
          onSubmit={handleSubmitTopUp}
          className="w-1/2 flex flex-col gap-4"
        >
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price === 0 ? "" : price}
            type="text"
            placeholder={"Rp.  Masukkan Nominal"}
            className="input input-bordered rounded-none w-full"
          />

          <SubmitButton
            isDisable={price < 10000 || price > 1000000}
            bgColor={"red"}
            label={"Top Up"}
          />
        </form>
        <div className="w-1/2">
          <div className="grid grid-cols-3 gap-6">
            {dataPriceSelection.map((item, i) => (
              <button
                key={i}
                onClick={() => getValuePrice(item.value)}
                className="btn btn-outline border-slate-400 rounded-none "
              >
                Rp.{item.price}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopUpPage;

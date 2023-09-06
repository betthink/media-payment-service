import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Saldo from "../../components/Saldo";
import TextInput from "../../components/Form/TextInput";
import SubmitButton from "../../components/Button/SubmitButton";
import { useNavigate } from "react-router-dom";

const TopUpPage = () => {
  // variables
  const [price, setPrice] = useState(0);
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
    alert(`Kamu Top Up ${price}`);
    navigate("/payment");
  };
  const getValuePrice = (value) => {
    setPrice(value);
  };

  return (
    <div className="h-screen">
      <Navbar />
      <Saldo />
      <div className="container mt-10">
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
            value={price}
            type="text"
            placeholder={"Rp.  Masukkan Nominal"}
            className="input input-bordered rounded-none w-full"
          />

          <SubmitButton
            isDisable={price < 10000}
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

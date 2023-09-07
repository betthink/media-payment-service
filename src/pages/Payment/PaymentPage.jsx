import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Saldo from "../../components/Saldo";
import TextInput from "../../components/Form/TextInput";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { tokenLocal } from "../../global/token";

const PaymentPage = () => {
  // variables
  const navigate = useNavigate();
  const location = useLocation();
  const { service_Code, service_price, service_icon } = location.state;
  // const { isLoggin,  token } = useSelector((state) => state.user.value);

  // functions
  const handleTransaction = async () => {
    try {
      const response = await axios.post(
        "https://take-home-test-api.nutech-integrasi.app/transaction",
        {
          service_code: service_Code,
        },
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenLocal}`,
          },
        }
      );
      const { status, data } = response;
      if (status === 200) {
        alert(data.message);
        window.location.reload();
      } else {
        alert("bad request network");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar />
      <Saldo />
      <div className="container">
        <div className="mt-10">
          <p className="">pemBayaran</p>
          <div className="flex flex-row items-center gap-2">
            <img className="w-14 -ml-3" src={service_icon} alt="Listrik" />
            <span className="font-bold text-1xl">{service_Code}</span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col container gap-6  mt-6">
        <TextInput isDisable={true} value={service_price} />
        <button
          onClick={handleTransaction}
          type="button"
          className={`btn rounded-none bg-redDominan text-white hover:text-redDominan`}
        >
          Bayar
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;

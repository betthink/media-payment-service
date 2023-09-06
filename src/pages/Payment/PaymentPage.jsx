import React from "react";
import Navbar from "../../components/Navbar";
import Saldo from "../../components/Saldo";
import { Listrik } from "../../components/Image/Images";
import TextInput from "../../components/Form/TextInput";
import SubmitButton from "../../components/Button/SubmitButton";

const PaymentPage = () => {
  return (
    <div>
      <Navbar />
      <Saldo />
      <div className="container">
        <p>pemBayaran</p>
        <div className="flex flex-row items-center  mt-5">
          <img
            className="rounded-full"
            width={34}
            src={Listrik}
            alt="Listrik"
          />
          <span className="font-bold text-1xl">Listrik praBayar</span>
        </div>
      </div>
      <div className="w-full flex flex-col container gap-6  mt-14">
        <TextInput value={"100000"} />
        <SubmitButton bgColor={"red"} label={"Bayar"} />
      </div>
    </div>
  );
};

export default PaymentPage;

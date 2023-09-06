// library
import React, { useState } from "react";
// components
import Navbar from "../../components/Navbar";
import Saldo from "../../components/Saldo";
import ListHorizontal from "../../components/List/ListHorizontal";

const TransactionPage = () => {
  // variables
  const [dataTransaction, setdataTransaction] = useState([
    {
      income: true,
      price: "100.000",
      service: "Top Up saldo",
      date: "17 Agustus 1925",
      time: "08:11",
    },
    {
      income: false,
      price: "40.000",
      service: "Pulsa Prabayar",
      date: "17 Agustus 1925",
      time: "08:11",
    },
    {
      income: false,
      price: "100.000",
      service: "Listrik Pasca Bayar",
      date: "17 Agustus 1925",
      time: "08:11",
    },
    {
      income: true,
      price: "100.000",
      service: "Top Up saldo",
      date: "17 Agustus 1925",
      time: "08:11",
    },
    {
      income: true,
      price: "100.000",
      service: "Top Up saldo",
      date: "17 Agustus 1925",
      time: "08:11",
    },
  ]);
  // functions
  return (
    <div>
      <Navbar />
      <Saldo />
      <div className="container">
        <div className="flex flex-row items-center  mt-5">
          <span className="font-bold text-1xl">Semua Transaksi</span>
        </div>
      </div>
      <div className="container mt-10 gap-3 flex flex-col">
        {dataTransaction.map((item, i) => (
          <ListHorizontal
            key={i}
            isIncome={item.income}
            date={item.date}
            price={item.price}
            service={item.service}
            time={item.time}
          />
        ))}
        <button className="btn bg-slate-100 w-fit self-center rounded-none text-red-600 mb-10">
          Show more
        </button>
      </div>
    </div>
  );
};

export default TransactionPage;

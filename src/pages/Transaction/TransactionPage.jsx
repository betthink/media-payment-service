// library
import React, { useEffect, useState } from "react";
// components
import Navbar from "../../components/Navbar";
import Saldo from "../../components/Saldo";
import ListHorizontal from "../../components/List/ListHorizontal";
import { axiosInstance } from "../../utils/axiosInstance";

const TransactionPage = () => {
  // variables
  const token = localStorage.getItem("token");

  const [dataTransaction, setdataTransaction] = useState([]);
  // functions
  const handleGetTransactionHistory = async () => {
    try {
      const response = await axiosInstance.get("/transaction/history", {
        headers: {
          Authorization: `Barier ${token}`,
        },
      });
      // console.log(response);
      const { status, data } = response;
      if (status === 200) {
        console.log(data.data.records);
        setdataTransaction(data.data.records);
      } else {
        console.log("network error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleGetTransactionHistory();
  }, []);
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
            isTopup={item.transaction_type}
            date={item.created_on}
            price={item.total_amount}
            service={item.description}
            time={item.created_on}
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

// library
import React, { useEffect, useState } from "react";
// components
import Navbar from "../../components/Navbar";
import Saldo from "../../components/Saldo";
import ListHorizontal from "../../components/List/ListHorizontal";
import { axiosInstance } from "../../utils/axiosInstance";
import { useSelector } from "react-redux";
import { userState } from "../../global/states";
import { tokenLocal } from "../../global/token";
import { all } from "axios";

const TransactionPage = () => {
  // variables
  const [isShowAll, setisShowAll] = useState(false);
  // const { token } = userState();

  const [dataTransaction, setdataTransaction] = useState([]);
  // functions
  const handleGetTransactionHistory = async (offset, limit) => {
    let url = `/transaction/history?offset=${offset}`;
    if (limit) {
      url += `&limit=${limit}`;
    }
  
    try {
      const response = await axiosInstance.get(url, {
        headers: {
          Authorization: `Barier ${tokenLocal}`,
        },
      });
      const { status, data } = response;
      if (status === 200) {
        setdataTransaction(data.data.records);
      } else {
        console.log("network error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetTransactionHistory(0, 3);
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
        {isShowAll ? (
          <button
            onClick={() => {
              handleGetTransactionHistory(0, 3);
              setisShowAll(!isShowAll);
            }}
            className="btn bg-slate-100 w-fit self-center rounded-none text-green-600 mb-10"
          >
            Show less
          </button>
        ) : (
          <button
            onClick={() => {
              handleGetTransactionHistory(0);
              setisShowAll(!isShowAll);
            }}
            className="btn bg-slate-100 w-fit self-center rounded-none text-red-600 mb-10"
          >
            Show more
          </button>
        )}
      </div>
    </div>
  );
};

export default TransactionPage;

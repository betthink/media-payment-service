import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import ServicesList from "./ServicesList";
import Banner from "./Banner";
import Saldo from "../../components/Saldo";
// import { useSelector } from "react-redux";

const HomePage = () => {
  useEffect(() => {}, []);
  return (
    <>
      <Navbar />
      <div>
        <Saldo />
        <ServicesList />
        <Banner />
      </div>
    </>
  );
};

export default HomePage;

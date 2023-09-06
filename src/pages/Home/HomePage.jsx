import React from "react";
import Navbar from "../../components/Navbar";
import ServicesList from "./ServicesList";
import Banner from "./Banner";
import Saldo from "../../components/Saldo";

const HomePage = () => {
  
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

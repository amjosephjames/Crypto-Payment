import React, { useState } from "react";
import axios from "axios";

const Homescreen = () => {
  const [amount, setAmount] = useState(10);
  const [currency, setCurrency] = useState("USD");

  const CreateCharge = async () => {
    await axios
      .post("http://localhost:3000/checkout", {
        amount,
        currency,
      })
      .then((res) => {
        console.log(res.data);
        window.open(res?.data?.charge?.hosted_url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <input
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <input
        value={currency}
        onChange={(e) => {
          setCurrency(e.target.value);
        }}
      />

      <button onClick={CreateCharge}>Pay with Crypto</button>
    </div>
  );
};

export default Homescreen;

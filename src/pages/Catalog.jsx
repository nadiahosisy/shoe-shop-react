import axios from "axios";
import React, { useState, useEffect } from "react";

import { Shoe, Spinner } from "../components";

const baseURL = "https://65040d9cc8869921ae2470cd.mockapi.io/shoes";
const Catalog = () => {
  const [shoes, setShoes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setShoes(response.data);
    });
  }, []);

  if (shoes.length === 0) return <Spinner />;

  return (
    <>
      <div className="shoes-list-container">
        <div className="shoes-list">
          {shoes.map((shoe) => {
            return <Shoe {...shoe} key={shoe.id} />;
          })}
        </div>
        <div className="scroll-down-indicator">
          {/* <span>Scroll Down</span> */}
          <div className="arrow"></div>
        </div>
      </div>
    </>
  );
};

export default Catalog;

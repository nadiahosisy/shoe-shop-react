import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import EditFormComponent from "../components/EditFormComponent";
import { useNavigate } from "react-router-dom";

const baseURL = "https://65040d9cc8869921ae2470cd.mockapi.io/shoes";

const ShoeDetails = () => {
  const [shoes, setShoes] = useState([]);
  const { shoeId } = useParams();
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setShoes(response.data);
    });
  }, []);

  const shoe = shoes.find((p) => p.id === shoeId);

  const deleteShoe = async (shoe) => {
    try {
      const response = await axios.delete(
        `https://65040d9cc8869921ae2470cd.mockapi.io/shoes/${shoe.id}`
      );
      navigate("/catalog");
      window.alert("The Shoe was deleted");
    } catch (error) {}
  };

  return (
    <>
      {shoe ? (
        <div className="shoe-details-container">
          <div className="left-shoe-details">
            <img src={shoe.image} alt="Shoe Image" />
            <h2>{shoe.name}</h2>
            <h4>{`${shoe.price}$`}</h4>
            <button className="delete-btn" onClick={() => deleteShoe(shoe)}>
              Delete Shoe
            </button>
          </div>
          <div className="right-shoe-details">
            <EditFormComponent shoe={shoe} />
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default ShoeDetails;

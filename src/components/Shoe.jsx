import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Shoe = (props) => {
  const { image, name, price, id } = props;
  const navigate = useNavigate();
  const openShoeById = () => {
    const url = `/catalog/${id}`;
    navigate(url);
  };

  return (
    <div className="shoe" onClick={openShoeById}>
      <img src={image} alt="Shoe Image" />
      <h2>{name}</h2>
      <h4>{price}$</h4>
    </div>
  );
};

export default Shoe;

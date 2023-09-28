import { useState } from "react";
import axios from "axios";
import InputField from "./InputField";
import { useNavigate } from "react-router-dom";

function EditFormComponent(props) {
  const { shoe } = props;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    image: shoe.image,
    name: shoe.name,
    price: shoe.price,
  });

  const [errors, setErrors] = useState({
    image: null,
    name: null,
    price: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevState) => ({ ...prevState, [name]: value }));

    setErrors((prevState) => ({ ...prevState, [name]: null }));
  };

  const goHome = () => {
    navigate("/catalog");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let isValid = true;
    const newErrors = {};

    const imageUrlRegex = /\.(png|jpe?g)$/i;
    if (!imageUrlRegex.test(formData.image)) {
      newErrors.image = "Please provide valid image url!";
      isValid = false;
    }

    const nameRegex = /^[A-Za-z0-9\s'".(),-]{5,}$/;
    if (!nameRegex.test(formData.name)) {
      newErrors.name = "Please enter a valid name!";
      isValid = false;
    }

    const priceRegex = /^\d+(\.\d{1,2})?$/;
    if (!priceRegex.test(formData.price)) {
      newErrors.price = "Please provide valid price!";
      isValid = false;
    }

    if (isValid) {
      try {
        const response = await axios.put(
          `https://65040d9cc8869921ae2470cd.mockapi.io/shoes/${shoe.id}`,
          {
            image: formData.image,
            name: formData.name,
            price: formData.price,
          }
        );
        navigate("/catalog");
        window.alert("The Shoe details were updated");
      } catch (error) {}
    }

    setErrors(newErrors);
  };
  return (
    <div className="edit-product-container">
      <form className="edit-shoe-form" onSubmit={handleSubmit}>
        <InputField
          label="Image url"
          type="text"
          name="image"
          value={formData.image}
          error={errors.image}
          onChange={handleInputChange}
        />

        <InputField
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          error={errors.name}
          onChange={handleInputChange}
        />

        <InputField
          label="Price"
          type="text"
          name="price"
          value={formData.price}
          error={errors.price}
          onChange={handleInputChange}
        />
        <div className="buttons-div">
          <input type="submit" value="Update" />
          <button onClick={goHome}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default EditFormComponent;

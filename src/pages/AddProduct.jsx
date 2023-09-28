import { useState } from "react";
import axios from "axios";
import InputField from "../components/InputField";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    price: "",
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
        const response = await axios.post(
          "https://65040d9cc8869921ae2470cd.mockapi.io/shoes",
          {
            image: formData.image,
            name: formData.name,
            price: formData.price,
          }
        );
        navigate("/catalog");
      } catch (error) {}
    }

    setErrors(newErrors);
  };
  return (
    <div className="add-product-container">
      <form className="add-shoe-form" onSubmit={handleSubmit}>
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
          <input type="submit" value="Submit" />
          <button onClick={goHome}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;

import { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import tomatoImage from "../assets/images/home-image.jpg";
import "./Home.css";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    harvestDate: "",
    availableQuantity: "",
    pricePerBasket: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDone = () => {
    // TODO: Replace with real API call once backend endpoint is ready
    // e.g. await api.post("/tomatoes", formData);
    console.log("Listing submitted:", formData);
    setShowForm(false);
  };

  return (
    <div className="home-page">
      <img src={tomatoImage} alt="Fresh tomatoes" className="home-image" />

      <button
        className="list-toggle-btn"
        onClick={() => setShowForm(!showForm)}
      >
        <span>LIST TOMATOES</span>
        <span className={`toggle-circle ${showForm ? "toggle-on" : ""}`}></span>
      </button>

      {showForm && (
        <div className="home-form">
          <Input
            label="HARVEST DATE:"
            name="harvestDate"
            type="date"
            value={formData.harvestDate}
            onChange={handleChange}
          />
          <Input
            label="AVAILABLE QUANTITY:"
            name="availableQuantity"
            type="number"
            value={formData.availableQuantity}
            onChange={handleChange}
          />
          <Input
            label="PRICE/BASKET:"
            name="pricePerBasket"
            type="number"
            value={formData.pricePerBasket}
            onChange={handleChange}
          />

          <Button variant="primary" className="done-btn" onClick={handleDone}>
            DONE
          </Button>
        </div>
      )}
    </div>
  );
}

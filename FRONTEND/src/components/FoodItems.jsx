import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import "../CSS/FoodItems.css";

const FoodItems = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetch("https://for-vercel-backend.onrender.com/foods")
      .then((response) => response.json())
      .then((data) => setFood(data))
      .catch((error) => console.error("Error Fetching Food:", error));
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`${"https://for-vercel-backend.onrender.com/foods"}/${id}`, {
        method: "DELETE",
      }).then((response) => {
        if (response.ok) {
          setFood(food.filter((item) => item._id !== id));
        } else {
          console.error("Failed to delete item from the server");
        }
      });
    } catch (error) {
      console.error("Error deleting the data:", error);
    }
  };

  const getImageUrl = (url) => {
    return url
      ? url
      : "https://dummyimage.com/300x200/cccccc/000000&text=No+Food+Available";
  };

  return (
    <div className="food-items-container">
      {food.length === 0 ? (
        <div className="no-food">
          <img
            src="https://dummyimage.com/300x200/cccccc/000000&text=No+Food+Available"
            alt="No food available"
            className="no-food-image"
          />

          <h2>No Food Items Available</h2>
          <p>
            It looks like there are no food items right now. Add some delicious
            recipes to get started!
          </p>
        </div>
      ) : (
        food.map((item) => (
          <div key={item?._id} className="food-card">
            <img
              src={getImageUrl(item?.image)}
              alt={item?.name}
              className="food-card-image"
            />
            <div className="food-card-content">
              <h2>{item?.name}</h2>
              <p>
                <strong>Cuisine:</strong> {item?.cuisine}
              </p>
              <p>
                <strong>Prep Time:</strong> {item?.prepTimeMinutes} mins
              </p>
              <p>
                <strong>Cook Time:</strong> {item?.cookTimeMinutes} mins
              </p>
              <p>
                <strong>Servings:</strong> {item?.servings}
              </p>
              <p>
                <strong>Difficulty:</strong> {item?.difficulty}
              </p>
              <p>
                <strong>Calories:</strong> {item?.caloriesPerServing} per
                serving
              </p>
              <p>
                <strong>Price:</strong> ₹{item?.price}
              </p>

              <div className="food-card-tags">
                {item.tags.map((tag, index) => (
                  <span key={index} className="food-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <button
              className="delete-icon"
              onClick={() => handleDelete(item._id)}
            >
              <FaTrash />
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default FoodItems;

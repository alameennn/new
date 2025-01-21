import { useState } from "react";
import "../CSS/AddFood.css";

const AddFood = () => {
  const [formData, setFormData] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    prepTimeMinutes: "",
    cookTimeMinutes: "",
    price: "",
    servings: "",
    difficulty: "",
    cuisine: "",
    caloriesPerServing: "",
    tags: "",
    image: "",
    mealType: "",
  });

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // convert multi line fields into arrays
    const formattedData = {
      ...formData,
      ingredients: formData.ingredients.split("\n").map((item) => item.trim()),
      instructions: formData.instructions
        .split("\n")
        .map((item) => item.trim()),
      tags: formData.tags.split(",").map((meal) => meal.trim()),
      mealType: formData.mealType.split(",").map((meal) => meal.trim()),
    };

    // send POST request to server
    
    fetch("https://for-vercel-backend.onrender.com/foods", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formattedData),
    })
      .then((response) => {
        if (response.ok) {
          alert("Food post added successfully!");
          setFormData({
            name: "",
            ingredients: "",
            instructions: "",
            prepTimeMinutes: "",
            cookTimeMinutes: "",
            price: "",
            servings: "",
            difficulty: "",
            cuisine: "",
            caloriesPerServing: "",
            tags: "",
            image: "",
            mealType: "",
          });
        } else {
          alert("Failed to add food post");
        }
      })
      .catch((error) => console.error("Failed to add post data", error));
  };

  return (
    <div className="add-food-container">
      <h1>Add a New Food Post</h1>
      <form onSubmit={handleSubmit} className="add-food-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="ingredients">Ingredients (one per line):</label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="instructions">Instructions (one per line):</label>
          <textarea
            name="instructions"
            id="instructions"
            value={formData.instructions}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="prepTimeMinutes">Prep Time (minutes):</label>
          <input
            type="number"
            id="prepTimeMinutes"
            name="prepTimeMinutes"
            value={formData.prepTimeMinutes}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="cookTimeMinutes">Cook Time (minutes):</label>
          <input
            type="number"
            id="cookTimeMinutes"
            name="cookTimeMinutes"
            value={formData.cookTimeMinutes}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price (₹):</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="servings">Servings:</label>
          <input
            type="number"
            id="servings"
            name="servings"
            value={formData.servings}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="difficulty">Difficulty:</label>
          <input
            type="text"
            id="difficulty"
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="cuisine">Cuisine:</label>
          <input
            type="text"
            id="cuisine"
            name="cuisine"
            value={formData.cuisine}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="caloriesPerServing">Calories Per Serving:</label>
          <input
            type="number"
            id="caloriesPerServing"
            name="caloriesPerServing"
            value={formData.caloriesPerServing}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="tags">Tags (comma-separated):</label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="mealType">Meal Type (comma-separated):</label>
          <input
            type="text"
            id="mealType"
            name="mealType"
            value={formData.mealType}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-button">
          Add Food
        </button>
      </form>
    </div>
  );
};

export default AddFood;
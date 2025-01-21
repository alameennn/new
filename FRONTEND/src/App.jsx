
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import AddFood from "./components/AddFood.jsx";
import FoodItems from "./components/FoodItems.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<FoodItems />} />
        <Route path="/FoodItems" element={<FoodItems />} />
        <Route path="/addfood" element={<AddFood />} />
      </Routes>
    </Router>
  );
};

export default App;

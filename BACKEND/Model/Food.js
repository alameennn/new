const mongoose = require("mongoose");
const { Schema } = mongoose;

// db connection
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.DATA_BASE);
  console.log("database connected");
}

// schema
const foodSchema = new Schema({
  name: { type: String, required: true },
  ingredients: [String],
  instructions: [String],
  prepTimeMinutes: Number,
  cookTimeMinutes: Number,
  price: { type: Number, required: true },
  servings: { type: Number, min: [1, "atleast 1 we deserve"] },
  difficulty: String,
  cuisine: String,
  caloriesPerServing: Number,
  tags: [String],
  userId: Number,
  rating: { type: Number },
  reviewCount: { type: Number },
  mealType: [{ type: String }],
});

exports.Food = mongoose.model("foods", foodSchema);

const model = require("../Model/Food");


const Food = model.Food;

exports.createFood = async (req, res) => {
  try {
    const docs = await new Food(req.body).save();
    res.status(201).json(docs);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: err.message });
  }
};

// read
exports.readFood = async (req, res) => {
  const foods = await Food.find({ servings: { $gt: 1 } });
  res.status(200).json(foods);
};

// read id
exports.readFoodId = async (req, res) => {
  const id = req.params.id;
  const foods = await Food.findById(id);
  res.json(foods);
};

//replace
exports.replaceFood = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Food.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json(doc);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

// update
exports.updateFood = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Food.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json(doc);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

// delete
exports.deleteFood = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Food.findOneAndDelete({ _id: id });
    res.status(202).json(doc);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

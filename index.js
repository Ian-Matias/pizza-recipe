import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

//Step 1: Run the solution.js file without looking at the code.
//Step 2: You can go to the recipe.json file to see the full structure of the recipeJSON below.
const recipeJSON =
  `[
  {
    "id": "0001",
    "type": "pizza",
    "name": "Cheese",
    "price": 5.99,
    "ingredients": {
      "protein": {
        "name": "Cheese",
        "preparation": "Baked"
      },
      "salsa": {
        "name": "Tomato Salsa",
        "spiciness": "None"
      },
      "toppings": [
        {
          "name": "Cheese",
          "quantity": "1 cup",
          "ingredients": ["Mozarella", "Cheddar", "Provolone"]
        }
      ]
    }
  },
  {
    "id": "0002",
    "type": "pizza",
    "name": "Pepperoni",
    "price": 7.99,
    "ingredients": {
      "protein": {
        "name": "Pepperoni",
        "preparation": "Baked"
      },
      "salsa": {
        "name": "Tomato Salsa",
        "spiciness": "Mild"
      },
      "toppings": [
        {
          "name": "Pepperoni",
          "quantity": "1/4 cup",
          "ingredients": ["Pepperoni"]
        }
      ]
    }
  },
  {
    "id": "0003",
    "type": "pizza",
    "name": "Pineapple",
    "price": 9.99,
    "ingredients": {
      "protein": {
        "name": "Cheese",
        "preparation": "Baked"
      },
      "salsa": {
        "name": "Alfredo",
        "spiciness": "None"
      },
      "toppings": [
        {
          "name": "Pineapple",
          "quantity": "1/2 cup",
          "ingredients": ["Pineapple", "Salt"]
        }
      ]
    }
  }
]
`
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

let data;

app.post("/recipe", (req, res) => {
  switch (req.body.choice) {
    case "cheese":
      data = JSON.parse(recipeJSON)[0];
      break;
    case "pepperoni":
      data = JSON.parse(recipeJSON)[1];
      break;
    case "pineapple":
      data = JSON.parse(recipeJSON)[2];
      break;
    default:
      break;
  }
  res.render("index.ejs", { recipe: data });
});

// Step 4: Add code to views/index.ejs to use the received recipe object.

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

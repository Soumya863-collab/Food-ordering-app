import { useState } from "react";

function Menu({ addToCart }) {

  const [category, setCategory] = useState("All");


  const foods = [

    {
      id: 1,
      name: "Margherita Pizza",
      category: "Pizza",
      description: "Delicious cheesy pizza with fresh toppings.",
      price: 249,
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002"
    },

    {
      id: 2,
      name: "Cheese Burger",
      category: "Burgers",
      description: "Juicy burger with cheese and fresh vegetables.",
      price: 199,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
    },

    {
      id: 3,
      name: "Grilled Chicken",
      category: "Chicken",
      description: "Tender grilled chicken with delicious spices.",
      price: 299,
      image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6"
    },

    {
      id: 4,
      name: "Chicken Biryani",
      category: "Biryani",
      description: "Aromatic basmati rice cooked with spicy chicken.",
      price: 279,
      image: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972"
    },

    {
      id: 5,
      name: "Chocolate Dessert",
      category: "Desserts",
      description: "Sweet and delicious chocolate dessert.",
      price: 149,
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307"
    },

    {
      id: 6,
      name: "Fresh Drink",
      category: "Drinks",
      description: "Refreshing drink to enjoy with your meal.",
      price: 99,
      image: "https://images.unsplash.com/photo-1544145945-f90425340c7e"
    },

    {
      id: 7,
      name: "Farmhouse Pizza",
      category: "Pizza",
      description: "Loaded with fresh vegetables and cheese.",
      price: 299,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
    },

    {
      id: 8,
      name: "Chicken Burger",
      category: "Burgers",
      description: "Crispy chicken burger with fresh vegetables.",
      price: 229,
      image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5"
    },

    {
      id: 9,
      name: "Paneer Tikka",
      category: "Chicken",
      description: "Soft paneer cubes grilled with Indian spices.",
      price: 219,
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8"
    },

    {
      id: 10,
      name: "Mutton Biryani",
      category: "Biryani",
      description: "Flavorful mutton biryani with aromatic spices.",
      price: 329,
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0"
    },

    {
      id: 11,
      name: "Chocolate Cake",
      category: "Desserts",
      description: "Rich and delicious chocolate cake.",
      price: 179,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587"
    },

    {
      id: 12,
      name: "Mango Juice",
      category: "Drinks",
      description: "Fresh and refreshing mango juice.",
      price: 119,
      image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4"
    }

  ];


  return (

    <div className="container mt-5">

      <h1 className="text-center mb-4">
        Our Menu
      </h1>


      {/* Category Buttons */}

      <div className="text-center mb-4">

        <button
          className={
            category === "All"
              ? "btn btn-primary m-1"
              : "btn btn-outline-primary m-1"
          }
          onClick={() => setCategory("All")}
        >
          All
        </button>


        <button
          className={
            category === "Pizza"
              ? "btn btn-primary m-1"
              : "btn btn-outline-primary m-1"
          }
          onClick={() => setCategory("Pizza")}
        >
          Pizza
        </button>


        <button
          className={
            category === "Burgers"
              ? "btn btn-primary m-1"
              : "btn btn-outline-primary m-1"
          }
          onClick={() => setCategory("Burgers")}
        >
          Burgers
        </button>


        <button
          className={
            category === "Chicken"
              ? "btn btn-primary m-1"
              : "btn btn-outline-primary m-1"
          }
          onClick={() => setCategory("Chicken")}
        >
          Chicken
        </button>


        <button
          className={
            category === "Biryani"
              ? "btn btn-primary m-1"
              : "btn btn-outline-primary m-1"
          }
          onClick={() => setCategory("Biryani")}
        >
          Biryani
        </button>


        <button
          className={
            category === "Desserts"
              ? "btn btn-primary m-1"
              : "btn btn-outline-primary m-1"
          }
          onClick={() => setCategory("Desserts")}
        >
          Desserts
        </button>


        <button
          className={
            category === "Drinks"
              ? "btn btn-primary m-1"
              : "btn btn-outline-primary m-1"
          }
          onClick={() => setCategory("Drinks")}
        >
          Drinks
        </button>

      </div>


      {/* Food Cards */}

      <div className="row g-4">

        {foods
          .filter((food) => {

            if (category === "All") {
              return true;
            }

            return food.category === category;

          })
          .map((food) => (

            <div
              className="col-12 col-md-6 col-lg-4"
              key={food.id}
            >

              <div className="card menu-card shadow-sm">

                <img
                  src={food.image}
                  className="menu-img"
                  alt={food.name}
                />


                <div className="card-body">

                  <h5 className="card-title">
                    {food.name}
                  </h5>


                  <p className="card-text">
                    {food.description}
                  </p>


                  <h6>
                    ₹{food.price}
                  </h6>


                  <button
                    className="btn btn-primary mt-2"
                    onClick={() => addToCart(food)}
                  >
                    🛒 Add to Cart
                  </button>

                </div>

              </div>

            </div>

          ))}

      </div>

    </div>
  );
}

export default Menu;
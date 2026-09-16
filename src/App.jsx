import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";

function App() {

  const [page, setPage] = useState("home");

  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (food) => {

    const existingItem = cart.find(
      (item) => item.id === food.id
    );

    if (existingItem) {

      setCart(
        cart.map((item) =>
          item.id === food.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        )
      );

    } else {

      setCart([
        ...cart,
        {
          ...food,
          quantity: 1
        }
      ]);

    }

    alert("Added to cart successfully! 🛒");
  };


  // Increase quantity
  const increaseQuantity = (id) => {

    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );

  };


  // Decrease quantity
  const decreaseQuantity = (id) => {

    setCart(
      cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );

  };


  // Remove item
  const removeFromCart = (id) => {

    setCart(
      cart.filter((item) => item.id !== id)
    );

  };


  // Cart item count
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );


  return (
    <>

      <Navbar
        setPage={setPage}
        cartCount={cartCount}
      />


      {page === "home" && (
        <Home setPage={setPage} />
      )}


      {page === "menu" && (
        <Menu
          addToCart={addToCart}
        />
      )}


      {page === "cart" && (
        <Cart
          cart={cart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeFromCart={removeFromCart}
        />
      )}


      {page === "login" && (
        <Login />
      )}

    </>
  );
}

export default App;
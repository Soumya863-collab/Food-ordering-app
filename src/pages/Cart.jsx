function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
}) {

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );


  const placeOrder = () => {

    if (cart.length === 0) {

      alert("Your cart is empty!");

      return;
    }


    alert(
      `Order placed successfully! 🎉\n\nTotal Amount: ₹${total}`
    );

  };


  return (

    <div className="container mt-5">

      <h1 className="text-center mb-4">
        Your Cart 🛒
      </h1>


      {cart.length === 0 ? (

        <div className="text-center">

          <h4>
            Your cart is empty
          </h4>

          <p className="text-muted">
            Add some delicious food from the menu.
          </p>

        </div>

      ) : (

        <>

          {cart.map((item) => (

            <div
              className="card mb-3 shadow-sm"
              key={item.id}
            >

              <div className="card-body">

                <div className="row align-items-center">


                  {/* Food Image */}

                  <div className="col-md-2">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid rounded"
                    />

                  </div>


                  {/* Food Name */}

                  <div className="col-md-3">

                    <h5>
                      {item.name}
                    </h5>

                    <p className="text-muted">
                      ₹{item.price} each
                    </p>

                  </div>


                  {/* Quantity */}

                  <div className="col-md-3">

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                    >
                      −
                    </button>


                    <span className="mx-3 fw-bold">
                      {item.quantity}
                    </span>


                    <button
                      className="btn btn-success btn-sm"
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                    >
                      +
                    </button>

                  </div>


                  {/* Item Total */}

                  <div className="col-md-2">

                    <strong>
                      ₹{item.price * item.quantity}
                    </strong>

                  </div>


                  {/* Remove */}

                  <div className="col-md-2">

                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                    >
                      Remove
                    </button>

                  </div>

                </div>

              </div>

            </div>

          ))}


          {/* Order Summary */}

          <div className="card shadow-sm mt-4">

            <div className="card-body text-end">

              <h4>
                Total Amount: ₹{total}
              </h4>


              <button
                className="btn btn-success btn-lg mt-3"
                onClick={placeOrder}
              >
                Place Order
              </button>

            </div>

          </div>

        </>

      )}

    </div>

  );
}

export default Cart;
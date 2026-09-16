function Home({ setPage }) {
    return (
        <div>

            {/* Hero Section */}
            <section className="container mt-5">
                <div className="row align-items-center">

                    {/* Left Side */}
                    <div className="col-md-6">

                        <h1 className="display-4 fw-bold">
                            Delicious Food,
                            <br />
                            Delivered To You
                        </h1>

                        <p className="lead mt-3">
                            Order your favourite food from the best restaurants
                            and enjoy it at your doorstep.
                        </p>

                        <button
                            className="btn btn-primary btn-lg mt-3"
                            onClick={() => setPage("menu")}
                        >
                            Explore Menu
                        </button>

                    </div>

                    {/* Right Side */}
                    <div className="col-md-6 text-center mt-4 mt-md-0">

                        <img
                            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                            alt="Delicious food"
                            className="img-fluid rounded"
                        />

                    </div>

                </div>
            </section>


            {/* Food Categories */}
            <section className="container mt-5">

                <h2 className="text-center mb-4">
                    Explore Categories
                </h2>

                <div className="row g-4">

                    <div className="col-6 col-md-4 col-lg-2">
                        <div className="card text-center category-card">

                            <img
                                src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002"
                                className="category-img"
                                alt="Pizza"
                            />

                            <div className="card-body">
                                <h5 className="card-title">Pizza</h5>
                            </div>

                        </div>
                    </div>



                    {/* Burger */}
                    <div className="col-6 col-md-4 col-lg-2">
                        <div className="card text-center category-card">

                            <img
                                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
                                className="category-img"
                                alt="Burger"
                            />

                            <div className="card-body">
                                <h5 className="card-title">Burgers</h5>
                            </div>

                        </div>
                    </div>


                    {/* Chicken */}
                    <div className="col-6 col-md-4 col-lg-2">
                        <div className="card text-center category-card">

                            <img
                                src="https://images.unsplash.com/photo-1598103442097-8b74394b95c6"
                                className="category-img"
                                alt="Chicken"
                            />

                            <div className="card-body">
                                <h5 className="card-title">Chicken</h5>
                            </div>

                        </div>
                    </div>


                    {/* Biryani */}
                    <div className="col-6 col-md-4 col-lg-2">
                        <div className="card text-center category-card">

                            <img
                                src="https://images.unsplash.com/photo-1631515242808-497c3fbd3972"
                                className="category-img biryani-img"
                                alt="Biryani"
                            />

                            <div className="card-body">
                                <h5 className="card-title">Biryani</h5>
                            </div>

                        </div>
                    </div>


                    {/* Desserts */}
                    <div className="col-6 col-md-4 col-lg-2">
                        <div className="card text-center category-card">

                            <img
                                src="https://images.unsplash.com/photo-1551024506-0bccd828d307"
                                className="category-img"
                                alt="Desserts"
                            />

                            <div className="card-body">
                                <h5 className="card-title">Desserts</h5>
                            </div>

                        </div>
                    </div>


                    {/* Drinks */}
                    <div className="col-6 col-md-4 col-lg-2">
                        <div className="card text-center category-card">

                            <img
                                src="https://images.unsplash.com/photo-1544145945-f90425340c7e"
                                className="category-img"
                                alt="Drinks"
                            />

                            <div className="card-body">
                                <h5 className="card-title">Drinks</h5>
                            </div>

                        </div>
                    </div>

                </div>

            </section >

        </div >
    );
}

export default Home;
function Navbar({ setPage, cartCount }) {

    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">

            <div className="container">

                {/* Logo + Website Name */}

                <button
                    className="navbar-brand btn btn-link text-white text-decoration-none d-flex align-items-center"
                    onClick={() => setPage("home")}
                >

                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
                        alt="Logo"
                        width="40"
                        height="40"
                        className="me-2"
                    />

                    <span>Roots and Recipes</span>

                </button>


                {/* Mobile menu button */}

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarMenu"
                >

                    <span className="navbar-toggler-icon"></span>

                </button>


                {/* Navigation */}

                <div
                    className="collapse navbar-collapse"
                    id="navbarMenu"
                >

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">

                            <button
                                className="nav-link btn btn-link"
                                onClick={() => setPage("home")}
                            >
                                Home
                            </button>

                        </li>


                        <li className="nav-item">

                            <button
                                className="nav-link btn btn-link"
                                onClick={() => setPage("menu")}
                            >
                                Menu
                            </button>

                        </li>


                        <li className="nav-item">

                            <button
                                className="nav-link btn btn-link"
                                onClick={() => setPage("cart")}
                            >
                                Cart 🛒

                                {cartCount > 0 && (
                                    <span className="badge bg-danger ms-1">
                                        {cartCount}
                                    </span>
                                )}

                            </button>

                        </li>


                

                    </ul>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;
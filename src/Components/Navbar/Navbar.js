import React from 'react'

function Navbar() {
    return (
        <div className="navbar-container">  
            <nav className="site-nav">
            <div className="container">
            <div className="site-navigation">
            <div className="row">
            <div className="col-md-6 text-center order-1 order-md-2 mb-3 mb-md-0">
            <a href="index-2.html" className="logo m-0 text-uppercase">MagDesign</a>
            </div>
            <div className="col-md-3 order-3 order-md-1">
            <form action="#" className="search-form">
            <span className="icon-search2">
               <i class="fas fa-search"></i>
            </span>
            <input type="search" className="form-control" placeholder="Search..." />
            </form>

            </div>
            <div className="col-md-3 text-end order-2 order-md-3 mb-3 mb-md-0">
            <div className="d-flex">
            <ul className="list-unstyled social me-auto">
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            </ul>
            <a href="#" className="burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block" data-toggle="collapse" data-target="#main-navbar">
            <span></span>
            </a>
            </div>
            </div>
            </div>
            <ul className="js-clone-nav d-none d-lg-inline-none text-start site-menu float-end">
            <li className="active"><a href="index-2.html">Home</a></li>
            <li className="has-children">
            <a href="categories.html">Categories</a>
            <ul className="dropdown">
            <li><a href="#">Travel</a></li>
            <li><a href="#">Food</a></li>
            <li><a href="#">Technology</a></li>
            <li><a href="#">Business</a></li>
            <li className="has-children">
            <a href="#">Dropdown</a>
            <ul className="dropdown">
            <li><a href="#">Sub Menu One</a></li>
            <li><a href="#">Sub Menu Two</a></li>
            <li><a href="#">Sub Menu Three</a></li>
            </ul>
            </li>
            </ul>
            </li>
            <li><a href="#">Travel</a></li>
            <li><a href="#">Food</a></li>
            <li><a href="#">Technology</a></li>
            <li><a href="#">Business</a></li>
            </ul>
            </div>
            </div>
            </nav>

        </div>
    )
}

export default Navbar

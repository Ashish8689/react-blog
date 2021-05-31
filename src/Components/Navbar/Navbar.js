import React from 'react';
import { selecthamburger, sethamburgerValue  } from '../../features/hamburger/hamburgerSlice';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';


function Navbar() {

    const hamburger = useSelector(selecthamburger);
    const dispatch = useDispatch();


    return (
        <div className={hamburger ? "navbar-container offcanvas-menu" : "navbar-container"}>  

            <div class="site-mobile-menu site-navbar-target">
                <div class="site-mobile-menu-header">
                    <div class="site-mobile-menu-close">
                    <span class="icofont-close js-menu-toggle" onClick={()=>dispatch(sethamburgerValue(!hamburger))} ></span>
                    </div>
                </div>

                <div class="site-mobile-menu-body">
                    <Link to="/" onClick={()=>dispatch(sethamburgerValue(false))}>
                        <h2>Home</h2>
                    </Link>

                    <Link to="/AddBlog" onClick={()=>dispatch(sethamburgerValue(false))}>
                        <h2>Add Blog</h2>
                    </Link>

                    <Link to="/about" onClick={()=>dispatch(sethamburgerValue(false))}>
                        <h2>About</h2>
                    </Link>
                </div>
            </div>


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
            <a href="#" onClick={()=>dispatch(sethamburgerValue(!hamburger))}   className="burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block" data-toggle="collapse" data-target="#main-navbar">
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

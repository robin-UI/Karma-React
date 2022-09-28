import React, {useEffect} from 'react'
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    let location = useLocation();
    useEffect(()=>{},[location])

    return (
        <>
            <header className="header_area sticky-header">
                <div className="main_menu">
                    <nav className="navbar navbar-expand-lg navbar-light main_box">
                        <div className="container">
                            {/* Brand and toggle get grouped for better mobile display */}
                            <Link className="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt="logo" /></Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            {/* Collect the nav links, forms, and other content for toggling */}
                            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                <ul className="nav navbar-nav menu_nav ml-auto">
                                    <li className={`nav-item ${location.pathname === "/" ? "active": ""}`}><Link className="nav-link" to="/">Home</Link></li>
                                    <li className={`nav-item ${location.pathname === "/shop" ? "active": ""}`}>
                                        <Link to="/shop" className="nav-link " role="button" aria-haspopup="true" aria-expanded="false">Shop</Link>
                                    
                                    </li>
                                    <li className={`nav-item ${location.pathname === "/blog" ? "active": ""}`}>
                                        <Link to="/blog" className="nav-link"  role="button" aria-haspopup="true" aria-expanded="false">Blog</Link>
                                    </li>
                                    <li className={`nav-item ${location.pathname === "/contact" ? "active": ""}`}>
                                        <Link to="/contact" className="nav-link"  role="button" aria-haspopup="true" aria-expanded="false">Contact</Link>
                                    </li>
                                    <li className={`nav-item ${location.pathname === "/login" ? "active": ""}`}><Link className="nav-link" to="/login">Logn</Link></li>
                                </ul>
                                <ul className="nav navbar-nav navbar-right">
                                    <li className="nav-item"><Link to="/addToCart" className="cart"><span className="ti-bag" /></Link></li>
                                    <li className="nav-item">
                                        <button className="search"><span className="lnr lnr-magnifier" id="search" /></button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="search_input" id="search_input_box">
                    <div className="container">
                        <form className="d-flex justify-content-between">
                            <input type="text" className="form-control" id="search_input" placeholder="Search Here" />
                            <button type="submit" className="btn" />
                            <span className="lnr lnr-cross" id="close_search" title="Close Search" />
                        </form>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar
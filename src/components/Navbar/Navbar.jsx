import React from "react";
import './Navbar.css'
const Navbar = () => {
    return (
        <section className=" n-wrapper">
            <div className="n-container">
                <img className="logo" src={require('../../img/densitylogo.jpg')} alt="logo" width={100} />
                <div className="n-menu">
                    <a className="menu-name" href="">Emotions</a>
                    <a className="menu-name" href="">Manifesto</a>
                    <a className="menu-name" href="">Self-awareness test</a>
                    <a className="menu-name" href="">Work With Us</a>
                </div>
                <button className="nav-btn">
                    <a className="nav-btn-1">Download</a>
                </button>
            </div>

        </section>
    )
}
export default Navbar;
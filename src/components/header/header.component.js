import React from "react";

const Header = () => (
    <div className="sidebar">
        <a href="#home" className="brand">
            <img
                src="https://seakun.id/images/seakunid.png"
                width="30"
                height="30"
                alt="not found"
            />
            <span>Seakun.id</span>
        </a>
        <ul>
            <li>
                <a href="#dummy">
                    <i className="fas fa-home"></i>Home
                </a>
            </li>
            <li>
                <a href="#dummy">
                    <i className="fas fa-user"></i>Order List
                </a>
            </li>
        </ul>
    </div>
);

export default Header;

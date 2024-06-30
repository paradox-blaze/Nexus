import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const getLinkClass = ({ isActive }) =>
        isActive
            ? "font-bold text-logo font-mono"
            : "font-bold font-mono text-black hover:text-logo";

    return (
        <div className="flex justify-around">
            <NavLink to="/">
                <img src="/assets/img_header_logo.png" alt="logo" className="h-12 mt-2" />
            </NavLink>
            <div className="mt-6 space-x-20 font-bold">
                <NavLink
                    exact="true"
                    to="/"
                    className={getLinkClass}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={getLinkClass}
                >
                    About
                </NavLink>
                <NavLink
                    to="/works"
                    className={getLinkClass}
                >
                    Works
                </NavLink>
                <NavLink
                    to="/contact"
                    className={getLinkClass}
                >
                    Contact
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
            <Link to="/" className="navbar-brand mx-5">
                React Rudex Contact App
            </Link>
        </nav>
    );
}

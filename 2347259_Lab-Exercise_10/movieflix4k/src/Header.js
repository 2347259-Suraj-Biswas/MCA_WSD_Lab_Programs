import React from 'react';
import './App.css';

function Header() {
    return (
        <header>
            <h1>MovieFlix4K</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/movies">Movies</a></li>
                    <li><a href="/categories">Categories</a></li>
                    <li><a href="/genres">Genres</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

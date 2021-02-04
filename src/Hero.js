import React from 'react';
import './hero.css';

export default function Hero() {
    return (
        <div className="hero-container">
            <div className="wordCarousel">
                <span>Vad jag kan: </span>
                <div>
                    <ul className="flip4">
                        <li>JAVASCRIPT</li>
                        <li>REACT.JS</li>
                        <li>CSS</li>
                        <li>HTML82</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

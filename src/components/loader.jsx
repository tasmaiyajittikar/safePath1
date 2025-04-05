import React from 'react';
import './loader.css';


const Loader = () => (
    <div className="loader-body">
        <div className="plane-svg">
            <svg viewBox="0 0 64 64" width="50" height="50" fill="black">
                <path d="M2 36l28 4 4 20 6-1-2-20 24-4v-4l-24-4 2-20-6-1-4 20-28 4z" />
            </svg>
        </div>
        <div className="loader-text">Loading</div>
    </div>
);

export default Loader;
// src/components/Hero.jsx
import { useState, useEffect } from 'react';

function Hero() {
    const [arrowOpacity, setArrowOpacity] = useState(1);

    // This useEffect hook runs once when the component mounts.
    // It's the React way of doing window.addEventListener.
    useEffect(() => {
        const handleScroll = () => {
            // When user scrolls, fade the arrow out
            setArrowOpacity(0);
        };

        window.addEventListener('scroll', handleScroll);

        // This is a cleanup function. React runs this when the component
        // is removed, preventing memory leaks.
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // The empty array [] means this effect runs only once.

    const handleTitleClick = () => {
        // This replaces the window.scrollBy logic
        window.scrollBy({
            top: window.innerHeight * 0.9, // 90vh
            behavior: 'smooth',
        });
    };

    return (
        <>
            <h1 id="mainpagetitle" onClick={handleTitleClick}>
                Lindley Park Cat Catalog
            </h1>
            <div id="navigatorarrow" style={{ opacity: arrowOpacity }}>
                ↓
            </div>
        </>
    );
}
export default Hero;
import { useState } from 'react'

import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import CatGrid from './components/CatGrid.jsx'
import Footer from './components/Footer.jsx'
import SearchOverlay from './components/SearchOverlay.jsx'

import { catData } from './data/cats'

function App() {
    // State to track if the search panel is open or not
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    return (
        // In JSX, we use a fragment <>...</> to wrap everything
        <>
            {/* The Header needs to be able to open the search, so we pass it the function */}
            <Header onSearchClick={() => setIsSearchVisible(true)} />

            <div id="body">
                <Hero />
                <About />

                {/* We pass the cat data down to the grid component as a "prop" */}
                <CatGrid cats={catData} />
                <div id="submit">
                    {/* In React, internal links will eventually be handled by a Router, but for now, this is fine */}
                    <a id="submitlink" className="nav" href="form.html">Submit your own cat</a>
                </div>
            </div>

            <Footer />

            {/* This is a conditional render. The SearchOverlay only appears if isSearchVisible is true. */}
            {isSearchVisible && (
                <SearchOverlay
                    cats={catData}
                    onClose={() => setIsSearchVisible(false)}
                />
            )}
        </>
    )
}

export default App;
// src/components/SearchOverlay.jsx
import { useState } from 'react';

function SearchOverlay({ cats, onClose }) {
    const [searchTerm, setSearchTerm] = useState('');

    // The list of cats to display is now derived from state.
    // When searchTerm changes, this filters automatically.
    const filteredCats = cats.filter(cat =>
        cat.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            {/* The gray background. Clicking it calls the onClose function from App.jsx */}
            <div id="grayout" onClick={onClose}></div>

            <div id="searchpanel">
                <input
                    type="text"
                    name="textsearch"
                    id="searchtext"
                    placeholder="Search..."
                    value={searchTerm}
                    // This is a "controlled component". The input's value is tied to React state.
                    onChange={(e) => setSearchTerm(e.target.value)}
                    autoFocus // Automatically focus the input when it appears
                />
                <div id="searchitems">
                    {filteredCats.map(cat => (
                        <div className="searchitem" key={cat.id}>
                            <a href={`${cat.id}.html`}>{cat.name}</a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
export default SearchOverlay;
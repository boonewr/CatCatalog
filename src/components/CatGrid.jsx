// src/components/CatGrid.jsx

function CatGrid({ cats }) {
    return (
        // We'll use the original ID for styling purposes.
        // The mobile/desktop grids will be handled by CSS media queries, not separate HTML.
        <div id="imggrid">
            {/* We map over the array of cats passed in as props */}
            {cats.map((cat) => (
                // Each item in a list needs a unique "key" prop. The cat's ID is perfect for this.
                <div key={cat.id} className="gridthumbnail">
                    <a className="grid" href={`${cat.id}.html`}>
                        {/* img tags must be self-closing in JSX */}
                        <img className="gridimg" src={cat.thumbnail} alt={`A photo of ${cat.name}`} />
                    </a>
                </div>
            ))}
        </div>
    );
}
export default CatGrid;
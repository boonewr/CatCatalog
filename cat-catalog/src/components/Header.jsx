function Header({ onSearchClick }) {
    return (
        <header id="navbar">
            <div id="headercontent">
                <div id="mainlink" className="navlink">
                    <a className="nav" href="main.html">Main Page</a>
                </div>
                <h1 id="title">Cat Catalog</h1>
                {/* When this div is clicked, it calls the function passed down from App.jsx */}
                <div id="searchlink" className="navlink" onClick={onSearchClick}>
                    <a className="nav">Search</a>
                </div>
            </div>
        </header>
    );
}
export default Header;
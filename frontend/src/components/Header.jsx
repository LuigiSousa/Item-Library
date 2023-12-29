import './components-css/Header.css'

function Header() {
    return (
        <div id="header-container">
            <h3>Item Library</h3>

            <div id="header-links">
                <a href="/">Home</a>
                <a href="/library">Library</a>
                <a href="http://localhost:2007/">Item Menu</a>
            </div>
        </div>
    )
}

export default Header
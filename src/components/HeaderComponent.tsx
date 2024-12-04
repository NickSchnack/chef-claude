import "./HeaderComponent.css"
import logo from "/src/assets/chef-claude-icon.png"

function HeaderComponent() {
    return (
        <header className="header-container">
            <img className="header-logo" src={logo} alt="chef claude logo" />
            <span className="header-text">chef claude</span>
        </header>
    );
}

export default HeaderComponent
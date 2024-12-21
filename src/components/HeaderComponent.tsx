import "./HeaderComponent.css"
import logo from "@src/assets/chef-claude-icon.png"

function HeaderComponent() {
    return (
        <header className="header-container">
            <img src={logo} alt="chef claude logo" />
            <span>chef claude</span>
        </header>
    );
}

export default HeaderComponent
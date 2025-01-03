import styled from "styled-components"
import logo from "@src/assets/chef-claude-icon.png"

const StyledHeader = styled.header`
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    padding: 15px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06);
    gap: 10px;

    img {
        max-height: 100%;
    }

    span {
        color: #141413;
        font-size: 1.7rem;
        text-transform: capitalize;
    }
`

function HeaderComponent() {
    return (
        <StyledHeader>
            <img src={logo} alt="chef claude logo" />
            <span>chef claude</span>
        </StyledHeader>
    );
}

export default HeaderComponent

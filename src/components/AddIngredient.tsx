import styled from "styled-components"

type AddIngredientTypes = {
    handleAddIngredient: (formData: FormData) => void;
}

const StyledForm = styled.form`
    display: flex;
    justify-content: center;
    margin: 0;
    gap: 12px;
    height: 38px;

    input {
        border-radius: 6px;
        border: 1px solid #D1D5DB;
        padding: 9px 13px;
        box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
        flex-grow: 1;
        min-width: 150px;
        max-width: 400px;
    }

    button {
        font-family: Inter, sans-serif;
        border-radius: 6px;
        border: none;
        background-color: #141413;
        color: #FAFAF8;
        padding: 0 20px;
        font-size: 0.875rem;
        font-weight: 250;
    }

    button::before {
        content: "+";
        margin-right: 4px;
    }
`

function AddIngredient({
    handleAddIngredient
}: AddIngredientTypes) {
    return (
        <StyledForm action={handleAddIngredient}>
            <input
                type="text"
                placeholder="e.g. oregano"
                aria-label="Add ingredient"
                name="ingredient"
            />
            <button>Add ingredient</button>
        </StyledForm>
    );
}

export default AddIngredient

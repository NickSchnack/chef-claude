import styled from "styled-components"

const StyledSection = styled.section`
    margin-top: 25px;
`

const GetRecipeContainer = styled.section`
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
    align-items: left;
    border-radius: 8px;
    background: #F0EFEB;
    padding: 10px 28px;

    button {
        margin: auto 0;
        border: none;
        border-radius: 6px;
        background: #D17557;
        box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
        color: #FAFAF8;
        padding: 9px 17px;
        font-family: Inter, sans-serif;
        font-size: 0.875rem;
        cursor: pointer;
    }
`

const StyledList = styled.ul`
    li {
        text-transform: capitalize;
    }
`

type IngredientListProps = {
    ingredients: string[]
    handleGetRecipe: () => void
}

function IngredientList({ ingredients, handleGetRecipe }: IngredientListProps) {
    const ingredientElements = ingredients.map((i) =>
        <li key={i}>{i}</li>
    );

    return (
        (ingredients.length > 0) && <StyledSection>
            <h2>Ingredients on hand:</h2>
            <StyledList>{ingredientElements}</StyledList>
            {(ingredients.length > 3) && <GetRecipeContainer>
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generates a recipe from your list of ingredients.</p>
                </div>
                <button onClick={handleGetRecipe}>Get a recipe</button>
            </GetRecipeContainer>}
        </StyledSection>
    );
}

export default IngredientList

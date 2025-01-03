import { useState } from 'react'
import styled from "styled-components"

import AddIngredient from '@components/AddIngredient';
import IngredientList from '@components/IngredientList';
import Recipe from '@components/Recipe';
import { getRecipeFromChefClaude } from '@ai/ai';

const StyledMain = styled.main`
    padding: 30px 30px;
`

function MainComponent() {
    const [ingredients, setIngredients] = useState(["all the main spices", "pasta", "ground beef", "tomato paste"]);
    const [recipe, setRecipe] = useState("");

    const addIngredient = (formData: FormData) => {
        const formObject = Object.fromEntries(formData)
        const ingredient = formObject["ingredient"] as string
        if (ingredient.length > 0) {
            setIngredients(prev => { return [...prev, ingredient] })
        }
    }

    const getRecipe = async () => {
        const response = await getRecipeFromChefClaude(ingredients);
        setRecipe(response);
    }

    return (
        <StyledMain>
            <AddIngredient
                handleAddIngredient={addIngredient}
            />
            <IngredientList
                ingredients={ingredients}
                handleGetRecipe={getRecipe}
            />
            {(recipe) && <Recipe
                markdownText={recipe}
            />}
        </StyledMain>
    );
}

export default MainComponent

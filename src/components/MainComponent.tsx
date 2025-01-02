import { useState } from 'react'
import "./MainComponent.css"

import AddIngredient from '@components/AddIngredient';
import IngredientList from '@components/IngredientList';
import Recipe from '@components/Recipe';
import { getRecipeFromChefClaude } from "@ai/ai.js";

function MainComponent() {
    const [ingredients, setIngredients] = useState(["all the main spices", "pasta", "ground beef", "tomato paste"]);
    const [recipeMarkdown, setRecipeMarkdown] = useState(<p>Based on the ingredients you have available...</p>);
    const [recipeShown, setRecipeShown] = useState(false);

    const addIngredient = (formData: FormData) => {
        const formObject = Object.fromEntries(formData)
        const ingredient = formObject["ingredient"] as string
        if (ingredient.length > 0) {
            setIngredients(prev => { return [...prev, ingredient] })
        }
    }

    const getRecipe = () => {
        //onst response = getRecipeFromChefClaude(ingredients);
        console.log(`Key: ${import.meta.env.VITE_ANTHROPIC_API_KEY}`)

        //console.log(response);
        //setRecipeMarkdown(response);
        //setRecipeShown(true);
    }

    return (
        <main>
            <AddIngredient
                handleAddIngredient={addIngredient}
            />
            <IngredientList
                ingredients={ingredients}
                handleGetRecipe={getRecipe}
            />
            {(recipeShown) && <Recipe
                markdownText={recipeMarkdown}
            />}
        </main>
    );
}

export default MainComponent
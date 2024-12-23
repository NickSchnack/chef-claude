import { useState } from 'react'
import "./MainComponent.css"

import AddIngredient from '@components/AddIngredient';
import IngredientList from '@components/IngredientList';
import Recipe from '@components/Recipe'

function MainComponent() {
    const [ingredients, setIngredients] = useState(["chicken", "Oregano", "tomatoes"]);
    const [recipeShown, setRecipeShown] = useState(false);

    const addIngredient = (formData: FormData) => {
        const formObject = Object.fromEntries(formData)
        const ingredient = formObject["ingredient"] as string
        if (ingredient.length > 0) {
            setIngredients(prev => { return [...prev, ingredient] })
        }
    }

    const getRecipe = () => {
        setRecipeShown(true)
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
            {(recipeShown) && <Recipe />}
        </main>
    );
}

export default MainComponent
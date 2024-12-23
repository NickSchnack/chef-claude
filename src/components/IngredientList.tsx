import "@components/IngredientList.css"

type IngredientListProps = {
    ingredients: string[]
    handleGetRecipe: () => void
}

function IngredientList({ ingredients, handleGetRecipe }: IngredientListProps) {
    const ingredientElements = ingredients.map((i) =>
        <li key={i}>{i}</li>
    );

    return (
        (ingredients.length > 0) && <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredient-list">{ingredientElements}</ul>
            {(ingredients.length > 3) && <div>
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generates a recipe from your list of ingredients.</p>
                </div>
                <button onClick={handleGetRecipe}>Get a recipe</button>
            </div>}
        </section>
    );
}

export default IngredientList
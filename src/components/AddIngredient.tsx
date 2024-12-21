import "@components/AddIngredient.css"

function AddIngredient() {
    return (
        <form action={addIngredient} className="add-ingredient-form">
            <input
                type="text"
                placeholder="e.g. oregano"
                aria-label="Add ingredient"
                name="ingredient"
            />
            <button>Add ingredient</button>
        </form>
    );
}

export default AddIngredient
import "@components/AddIngredient.css"

type AddIngredientTypes = {
    handleAddIngredient: (formData: FormData) => void;
}

function AddIngredient({
    handleAddIngredient
}: AddIngredientTypes) {
    return (
        <form action={handleAddIngredient} className="add-ingredient-form">
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
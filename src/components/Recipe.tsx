import "./Recipe.css"
import ReactMarkdown from "react-markdown"

type RecipeTypes = {
    markdownText: string
}

export default function Recipe({markdownText}: RecipeTypes) {
    return (
        <section>
            <article className="suggested-recipe-container" aria-live="polite">
                <h2>Suggested Recipe:</h2>
                <ReactMarkdown>{markdownText}</ReactMarkdown>
            </article>
        </section>
    )
}
import ReactMarkdown from "react-markdown"
import styled from "styled-components"

type RecipeTypes = {
    markdownText: string
}

const StyledSection = styled.section`
    margin-top: 50px;
`

export default function Recipe({markdownText}: RecipeTypes) {
    return (
        <StyledSection>
            <article aria-live="polite">
                <h2>Suggested Recipe:</h2>
                <ReactMarkdown>{markdownText}</ReactMarkdown>
            </article>
        </StyledSection>
    )
}
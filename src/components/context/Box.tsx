import { useContext } from "react"
import { ThemeContenxt, ThemeContextProvider } from "./ThemeContext"

export const Box = () => {
    const theme = useContext(ThemeContenxt)
    return (
        <ThemeContextProvider>
            <div>
                <h1 style={{ backgroundColor: theme.primary.main,color:theme.primary.text }}>
                    Theme Context
                </h1>
                <h1 style={{ backgroundColor: theme.secondary.main,color:theme.secondary.text }}>
                    Theme Context 2
                </h1>
            </div>
        </ThemeContextProvider>
    )
}

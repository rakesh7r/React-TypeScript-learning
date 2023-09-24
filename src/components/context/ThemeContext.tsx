import { createContext } from "react"
import { theme } from "./theme"

export const ThemeContenxt = createContext(theme)

type ThemeContextProps = {
    children: React.ReactNode
}

export const ThemeContextProvider = ({ children }: ThemeContextProps) => {
    return (
        <ThemeContenxt.Provider value={theme}>
            {children}
        </ThemeContenxt.Provider>
    )
}

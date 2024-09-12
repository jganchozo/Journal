import { CssBaseline, ThemeProvider } from "@mui/material"
import { purple } from "./"

export const AppTheme = ({ children }) => {
    return (
        <ThemeProvider theme={purple}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

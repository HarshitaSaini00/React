import {createContext,useContext} from "react";

export const ThemeContext = createContext({
    themeMode :"light",
    darkTheme : ()=>{},
    lightTheme:()=>{},
})

export const ThemeProvider =ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
    /* agar humme koi bhi chiz ThemeContext se chahiye to hum useTheme function se extract kar sakte hai  */
}

/* ye bhi ek way hota hai code karne ka jisme humme multiple files ko import nhi karna padhta hai hum ek hi jagah se chize import kar sakte hai */
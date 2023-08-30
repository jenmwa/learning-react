import { createContext } from "react";


export interface ITheme {
    name: string,
    backgroundcolor: string,
    color: string
}

export interface IThemes {
    dark: ITheme,
    light: ITheme
}

export const themes: IThemes = {
    dark: {
        name: 'Night',
        backgroundcolor: 'black',
        color: 'whitesmoke',
    },
    light: {
        name: 'Day',
        backgroundcolor: 'whitesmoke',
        color: 'black',
    }
};

export const ThemeContext = createContext<ITheme>(themes.light);
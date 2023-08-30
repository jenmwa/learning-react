import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

interface IButtonProps {
    clickfunction: () => void;
    children: JSX.Element;
}

export const Button = ({clickfunction, children}: IButtonProps) => {
    const currentTheme = useContext(ThemeContext);

    return <>
    <button 
        style={{ backgroundColor: currentTheme.backgroundcolor, color: currentTheme.color }}
        onClick={clickfunction}
        >{children}</button>
    </>
}
import { ChangeEvent, useState } from "react";

interface IAddFlavorProps {
    addFlavor: (text:string) => void;
}

export const Input = ({addFlavor}: IAddFlavorProps) => {
    const [ userInput, setUserInput] = useState('')

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
       setUserInput(e.target.value);
    };

    const handleSave = () => {
        console.log('click add')
        addFlavor(userInput);
        setUserInput("");
    }

    return (
        <>
        <label>
            lägg till en önske-glassmak här:
        <input onChange={handleInput} type="text" value={userInput}></input>
        </label>
        <button onClick={handleSave}>Spara</button>
        
       
        </>
    )
}
import { ChangeEvent, useState } from "react";
import '../style/colors.css';
import axios from "axios";
import { IApiResponse } from "../Models/IApiResponse";
import { IColor } from "../Models/IColor";
import { ColorsPresentation } from "./ColorsPresentation";

//     https://www.thecolorapi.com/scheme?hex=b1ef4f&mode=monochrome&count=6&format=html
//     https://www.thecolorapi.com/scheme?hex={userInput}&mode=monochrome&count=6&format=html

export const Colors = () => {

  const [userColor, setUserColor] = useState('');
  const [response, setResponse] = useState<IColor[]>([]);
  const [apiSuccess, setApiSuccess] = useState(false);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const userInput = e.target.value;
    setUserColor(userInput);
    getApi(userInput);
  }

  const getApi = async (userInput: string) => {
    console.log(userInput);
    userInput = userInput.replace('#', '');
    console.log(userInput);
    if (!apiSuccess) {
      try {
        const response = await axios.get<IApiResponse>(`https://www.thecolorapi.com/scheme?hex=${userInput}&mode=monochrome&count=6&format=json`);
        console.log(response.data.colors);
        console.log(response.data);
        setResponse(response.data.colors)
        setApiSuccess(true)
      }
      catch (error) {
        console.log('error:', error)
      }
    }
    //else ?
  }

  const getName = (userColor: string) => {
    console.log(userColor);
    userColor = userColor.toUpperCase();
    const color = response.find((color) => color.hex.value === userColor);
    console.log(userColor)
    console.log(color)
    if (color) {
      console.log(color.name.value)
      return {
        hex: color.hex.value,
        name: color.name.value,
        contrast: color.contrast.value
      };
    }
    return {
      hex: '',
      name: '',
      contrast: ''
    };
  }

  const userColorStyle = {
    backgroundColor: userColor,
    color: getName(userColor).contrast
  };

  const resetBtn = () => {
    setUserColor('');
    setResponse([]);
    setApiSuccess(false);
  }

  return (
    <>
      {userColor == '' && (
        <>
          <h2>Choose your color:</h2>
          <label>
            <input className='input-color' type='color' onChange={handleOnChange}></input>
          </label>
          {/* <h3>Or, write in a hex code here:</h3>
          <label>
            <input className='input-text' type='text' onChange={handleOnChange}></input>
          </label> */}
        </>
      )}


      {userColor !== '' && (
        <>
        <ColorsPresentation
          userColor={userColor}
          userColorStyle={userColorStyle}
          getName={getName}
          resetBtn={resetBtn}
          response={response}
        />

        </>
      )}

    </>
  )

}



import { ChangeEvent, useState } from "react";
import '../style/colors.css';
import axios from "axios";
import { IApiResponse } from "../Models/IApiResponse";
import { IColor } from "../Models/IColor";

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
   //else resetbtn?
  }

  const getName = (userColor: string) => {
    console.log(userColor);
    userColor = userColor.toUpperCase();
    const color = response.find((color) => color.hex.value === userColor);
    console.log(userColor)
    console.log(color)
      if (color) {
        console.log(color.name.value)
       return color.name.value;
      }
      return '';
    }

  const userColorStyle = {
    backgroundColor: userColor,
  };

  const resetBtn = () => {
    setUserColor('');
    setResponse([]);
    setApiSuccess(false);
  }
  
    const handleClick = (id: string) => {
      console.log('read more about:', id)
    }


  const html = response.map((color) => (
    <div key={color.hex.value}>
      {/* <h4>{color.name.value}</h4> */}
      <div>
        <img src={color.image.named} alt={color.name.value} />
      </div>
    </div>
  ));

  return (
    <>
    {userColor == '' && (
      <>
      <h2>Choose your color:</h2>
      <label>

        <input className='input-color' type='color' onChange={handleOnChange}></input>
      </label><br></br>
    </>
    )}
      {/* <p> I want to write my hex-code instead!</p>
      <input type="text"></input> */}

      {userColor !== '' && (
        <>
         <h2>Your color:</h2>
        <div className='user-color' style={userColorStyle}>
          <p>{userColor}</p>
          <p>{getName(userColor)}</p>
        </div>
        <button onClick={resetBtn}>New Color</button>
        {html}
        </>
      )}


      <div>
        {/* <img src={response?}></img> */}
      </div>
 
      //klick på varje del
      <div onClick={() => handleClick(userColor)}>Read more about this color...</div>
    </>
  )

}



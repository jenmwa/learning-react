import { ChangeEvent, useState } from "react";
import '../style/colors.css';
import axios from "axios";
import { IApiResponse } from "../Models/IApiResponse";

//     https://www.thecolorapi.com/scheme?hex=b1ef4f&mode=monochrome&count=6&format=html
//     https://www.thecolorapi.com/scheme?hex={userInput}&mode=monochrome&count=6&format=html

export const Colors = () => {

  const [userColor, setUserColor] = useState('');
  const [response, setResponse] = useState<IApiResponse>();
  const [apiSuccess, setApiSuccess] = useState(false);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    //ta bort # i userInput så vi kan använda i anrop
    console.log(e.target.value);
    const userInput = e.target.value;
    setUserColor(userInput);
    getApi(userInput)
  }

  const handleClick = (id: string) => {
    console.log('read more about:', id)
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
        setResponse(response.data)
        setApiSuccess(true)
      }
      catch (error) {
        console.log('error:', error)
      }
    }
   //else resetbtn?
  }


  return (
    <>
      <h2>Choose your color:</h2>
      <label>

        <input className='input-color' type='color' onChange={handleOnChange}></input>
      </label><br></br>
      {/* <p> I want to write my hex-code instead!</p>
      <input type="text"></input> */}

      {userColor !== '' && <div><p>your color: {userColor}</p>
      <p>it's name </p></div>}

      
      <div>
        <img src={response?.image.named}></img>
      </div>
 
      //klick på varje del
      <div onClick={() => handleClick(userColor)}>Read more about this color...</div>
    </>
  )

}



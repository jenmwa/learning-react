import { ChangeEvent, useState } from "react";
import '../style/colors.css';

//     https://www.thecolorapi.com/scheme?hex=b1ef4f&mode=monochrome&count=6&format=html
//     https://www.thecolorapi.com/scheme?hex={userInput}&mode=monochrome&count=6&format=html

export const Colors = () => {

  const [userColor, setUserColor] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    //ta bort # i userInput så vi kan använda i anrop
    console.log(e.target.value);
    setUserColor(e.target.value);
  }

  const handleClick = (id: string) => {
    console.log('read more about:', id)
  }

  return (
    <>
      <h2>Choose your color:</h2>
      <label>

        <input className='input-color' type='color' onChange={handleOnChange}></input>
      </label><br></br>
      {/* <p> I want to write my hex-code instead!</p>
      <input type="text"></input> */}

      {userColor !== '' && <p>your color: {userColor}</p>}

      
      //hämta spektra *5<br></br>
 
      //klick på varje del
      <div onClick={() => handleClick(userColor)}>Read more about this color...</div>
    </>
  )

}



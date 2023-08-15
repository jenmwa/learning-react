import { useEffect, useState } from "react";
// import { IColorResponse } from "../Models/IColorResponse";
import { IColor } from "../Models/IColor";
import '../style/search.scss'
import { getColorInfo } from "../Services/ColorService";

interface IColorProps {
  color: string;
}

//https://www.thecolorapi.com/id?hex=0047AB
//img "https://www.thecolorapi.com/id?format=svg&hex=0047AB"

export const Color = ({ color }: IColorProps) => {
  console.log(color);
  const [myColor, setMyColor] = useState<IColor | undefined>();
  const colorId = color.replace('#', '');
  console.log(colorId);
  console.log('https://www.thecolorapi.com/id?hex=' + colorId)

  useEffect(() => {
    const getApi = async () => {
      const response = await getColorInfo(colorId);
      if(response) {
        setMyColor(response);
      }
    };
    getApi();
  }, [colorId]);


  return <>
  <div className='your-color-div'>
    <p>Your Color:</p>
    <div>
  {myColor ? (
   
    <div>
       <p>{myColor.hex?.value}</p>
      <img src={myColor.image?.named} alt={myColor.name?.value} />
    </div>
  ) : (
    <p>Getting color information...</p>
  )}
</div>
</div>

  </>
}
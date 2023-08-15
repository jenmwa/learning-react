import { useEffect, useState } from "react";
import { IColorScheme } from "../Models/IColorScheme";
import { getColorScheme } from "../Services/ColorService";

interface IColorProps {
  color: string;
}

export const Monochrome = ({ color }: IColorProps) => {

  const [myColorScheme, setMyColorScheme] = useState<IColorScheme | undefined>();
  const colorId = color.replace('#', '');

  useEffect(() => {
    const getSchemeApi = async () => {
      const response = await getColorScheme(colorId);
      if (response) {
        setMyColorScheme(response)
      }
    }
    getSchemeApi();
  }, [colorId])

  return <>
    <div className='monochrome-div'>
      <p>Monochrome</p>
      <p>note to self: render list instead of img for click to new Your Color</p>
      {color}
      {myColorScheme ? (
        <div>
          <img src={myColorScheme.image?.named} />
        </div>
      ) : (
        <p>Getting color information...</p>
      )
      }
    </div>
  </>
}

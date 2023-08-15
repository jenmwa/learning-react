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
    <p>Monochrome</p>
    {color}
    {myColorScheme ? (
    <div>
      <img src={myColorScheme.image?.named} />
    </div>
    ) : (
      <p>Getting color information...</p>
    )
    }
   
  </>
}

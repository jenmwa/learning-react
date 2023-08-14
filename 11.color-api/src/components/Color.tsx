import { useParams } from "react-router-dom"
import { IColor } from "../Models/IColor";
import { useEffect, useState } from "react";
import axios from "axios";


export const Color = () => {
  const { id } = useParams();
  const [color, setColor] = useState<IColor>();

  console.log(id);

  useEffect(() => {
    const getColor = async () => {
      const response = await axios.get<IColor>(
        'https://www.thecolorapi.com/id?format=json&hex=' + id
        );

      setColor(response.data)
    };
    if(!color) getColor();
  }) 

  

  return (
    <> 
      Color #{id}<br></br>
      <img src={color?.image.named}></img><br></br>
      name: {color?.name.value}<br></br>
      hex: {color?.hex.value}<br></br>
      RGB: {color?.rgb.value}<br></br>
      HSL: {color?.hsl.value}<br></br>
      HSV: {color?.hsv.value}<br></br>
      CMYK: {color?.cmyk.value}<br></br>
      XYZ: {color?.XYZ.value}<br></br>
    </>
  )

}
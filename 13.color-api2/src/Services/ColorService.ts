import axios from "axios";
import { IColor } from "../Models/IColor";
import { IColorScheme } from "../Models/IColorScheme";


const BASEURL = 'https://www.thecolorapi.com/';

export const getColorInfo = async (colorId: string): Promise<IColor | undefined> => {
  try {
    const response = await axios.get<IColor>(`${BASEURL}id?hex=` + colorId);
    return response.data;
  } catch (error) {
    console.error('error', error);
    return undefined;
  }
}

export const getColorScheme = async (colorId: string):Promise<IColorScheme | undefined> => {
  try {
    const response = await axios.get<IColorScheme>(`${BASEURL}scheme?hex=`+ colorId);
    return response.data;
  } catch (error) {
    console.log('error', error);
    return undefined;
  }
}
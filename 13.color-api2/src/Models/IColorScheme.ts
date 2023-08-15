import { IColor } from "./IColor";

export interface IColorScheme {
    image: {
        named: string
    },
    schemes: {
        monochrome: string,
    },
    colors: IColor[],
}
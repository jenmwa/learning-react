import { IColor } from "./IColor"


export interface IApiResponse {
    colors: IColor[],
    image: {
        named: string
    }

}
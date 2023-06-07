import { ICategory } from "./ICategory";

export interface IProgram {
  id: number,
  name: string,
  description: string,
  broadcastinfo: string,
  programurl: string,
  programimage: string,
  programcategory: ICategory;

}
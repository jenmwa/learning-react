import { ICategory } from "./ICategory";
import { IChannel } from "./IChannel";

export interface IProgram {
  id: number,
  name: string,
  description: string,
  broadcastinfo: string,
  programurl: string,
  programimage: string,
  programcategory: ICategory,
  channel: IChannel,

}

export interface IAction {
  type: ActionType,
  payload: boolean
}

export enum ActionType {
  TOGGLE_SHOPCART,
  CLOSED_SHOPCART
}

export const OpenShopCartReducer = (isOpen: boolean, action: IAction) => {

  if (action.type === ActionType.TOGGLE_SHOPCART) {
    return !isOpen;
  }
  if (action.type === ActionType.CLOSED_SHOPCART) {
    return false;
  }
  return isOpen;

}
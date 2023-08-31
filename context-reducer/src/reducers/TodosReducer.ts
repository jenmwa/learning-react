import { Todo } from "../models/Todo"


export interface IAction {
    type: ActionType,
    payload: string,
}

export enum ActionType {
    ADDED,
    TOGGLED,
    REMOVED,
}

export const TodosReducer = (todos: Todo[], action: IAction) => {

    if (action.type === ActionType.ADDED) {
        return [...todos, new Todo( new Date().getTime(), action.payload, false)]
    }
    if (action.type === ActionType.TOGGLED) {
        return todos.map((todo) => {
            if(todo.id === Number(action.payload)) {
                return {...todo, isDone: !todo.isDone }
            }
            return todo;
        })
    }
    if (action.type === ActionType.REMOVED) {
        return todos.filter((todo) => todo.id !== Number(action.payload))
    }

    return todos;
}
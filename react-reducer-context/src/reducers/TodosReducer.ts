// import { useReducer } from "react";
import { Todo } from "../models/Todo";

// dispatch(action: IAction)
//dispatch({ type: 'ADDED', payload: 'Lorem'})

// const [todos, dispatch] = useReducer(TodosReducer, []);

// interface IAction {
// 	type: string,
// 	payload: string;
// }

// export const TodosReducer = (todos: Todo[], action: IAction ) => {
// 	switch(action.type) {
// 		case 'ADDED': {
// 			return [...todos, new Todo(new Date().getTime(), action.payload, false)]
// 		}
// 		case 'TOGGLED': {
// 			const id = Number(action.payload);
// 			todos.map((todo) => {
// 				if(todo.id === id) todo.isDone = !todo.isDone;
// 				return todo;
// 				});
// 				break;
// 		}
// 		case 'REMOVED': {
// 			return
// 		}
// 		default:
// 			break;
// 	}

// 	return todos;
// }

// interface IAction {
// 	type: string,
// 	payload: string
// }

// export const TodosReducer = (todos: Todo[], action: IAction) => {

// 	if (action.type === 'ADDED') {
// 		console.log(action, todos)

// 		const newState = [...todos, new Todo(new Date().getTime(), action.payload, false)];
// 		console.log(newState)
// 		// return todos;
// 		// return [...todos, new Todo(new Date().getTime(), action.payload, false) ]
// 		return newState;
// 	}

// 	//måste returnera objekten i sin helhet
// 	if (action.type === 'TOGGLED') {
// 		return todos.map((todo) => {
//         if (todo.id === Number(action.payload)) {
// 			return {...todo, isDone: !todo.isDone }
// 		}
//         return todo;
// 	})
// 	}

// 	if (action.type === 'REMOVED') {
// 		return todos.filter((todo) => todo.id !== Number(action.payload));
// 	}

// 	return todos;

// }

export interface IAction<T>{
	type: ActionType,
	payload: T,
}

export enum ActionType {
	ADDED,
	TOGGLED,
	REMOVED,
}

export const TodosReducer = <T>(todos: Todo[], action: IAction<T>) => {

	if (action.type === ActionType.ADDED ) {
		const payloadTemporary = action.payload as unknown;
		const payloadToString = payloadTemporary as string;
		const newTodo = [...todos, new Todo( new Date().getTime(), payloadToString, false)];
		return newTodo;
	}

	if (action.type === ActionType.TOGGLED) {
		return todos.map((todo) => {
			if(todo.id === +(action.payload)) {
				return { ...todo, isDone: !todo.isDone}
			}
			return todo;
		})
	}

	if (action.type === ActionType.REMOVED) {
		return todos.filter((todo) => todo.id !== Number(action.payload))
	}

	return todos;
}
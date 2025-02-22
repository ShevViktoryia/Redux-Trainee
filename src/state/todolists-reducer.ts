import { v1 } from "uuid";
import { FilterValuesType, TodolistType } from "../App";

export type AddTodolistActionType = ReturnType<typeof addTodolistAC>;

type ActionsType = AddTodolistActionType;

const initialState: Array<TodolistType> = [];

export const todolistsReducer = (
  state: Array<TodolistType> = initialState,
  action: ActionsType
): Array<TodolistType> => {
  switch (action.type) {
    case "АDD-TODOLIST": {
      return [
        {
          id: action.todolistId,
          title: action.title,
          filter: "all",
        },
        ...state,
      ];
    }
    case "DELETE-TODOLIST": {
      return state.filter((el) => el.id !== action.todolistId);
    }
    default:
      return state;
  }
};

export const addTodolistAC = (title: string) => ({
  type: "ADD-TODOLIST",
  title: title,
  todolistId: v1(),
});

export const deleteTodolistAC = (id: string) => ({
  type: "DELETE_TODOLIST",
  todolistId: id,
});

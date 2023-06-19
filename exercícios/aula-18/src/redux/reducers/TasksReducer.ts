import { Action } from "../types";

const INITIAL_STATE = {
  tasks: [
    {
      //   id: "",
      title: "Estudar Redux",
      date: "2023/06/15",
      description: "Revisar as aulas e o PG",
      category: "Educação",
    },
  ],
};

export function TasksReducer(state = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case "ADD_TASK": {
      const stateCopy = { ...state };
      stateCopy.tasks.push(action.payload.task);
      return { ...stateCopy };
    }

    case "DELETE_TASK": {
      const stateCopy = { ...state };
      stateCopy.tasks.splice(action.payload.index, 1);
      return { ...stateCopy };
    }

    default:
      return state;
  }
}
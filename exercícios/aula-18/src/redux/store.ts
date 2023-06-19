import { Store, combineReducers, createStore } from "redux";
import { TasksReducer } from "./reducers/TasksReducer";

const reducers = combineReducers({
  tasks: TasksReducer,
});

export type RootState = {
  tasks: {
    tasks: [
      {
        id?: string;
        title: string;
        date: string;
        description: string;
        category: string;
      }
    ];
  };
};

export const store: Store<RootState> = createStore(reducers);
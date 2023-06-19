type ActionAddTask = {
    type: "ADD_TASK";
    payload: {
      task: {
        title: string;
        date: string;
        description: string;
        category: string;
      };
    };
  };
  
  type ActionDeleteTask = {
    type: "DELETE_TASK";
    payload: {
      index: number;
    };
  };
  
  export type Action = ActionAddTask | ActionDeleteTask;
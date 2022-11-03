import create from "zustand";
import { TodoList } from "../pages/TodoList";

type IUser = {
  username: string
  email?: string
}

type ITodo = {
  _id: string
  text: string
}


type IStore = {
  user?: IUser,
  todos: ITodo[],
  addTodo: (todoNew: ITodo) => void,
  deleteTodo: (todoId: string) => void,
  updateTodo: (todoId: string, todoUpdate: Partial<ITodo>) => void
}

// create store
// create receives createStore function
// which gets injected set function to update stores inside mutation functions
export const useStore = create<IStore>((set) => ({
  user: { username: "losrobbos", email: "los@los.los" },
  todos: [
    { _id: "t1", text: "Do dat" }
  ],  
  // return a partial (!) object of the state, 
  // so just the part of state we wanna update, e.g. todos
  addTodo: (todoNew: ITodo) => set((state) => ({ todos: [...state.todos, todoNew] })),
  deleteTodo: (todoId: string) => set((state) => ({todos: state.todos.filter((todo) => todo._id !== todoId )})),
  updateTodo: (todoId: string, todoUpdate: Partial<ITodo>) => set((state) => {
    const todosUpdated = state.todos.map(todo => {
      return todo._id === todoId ? { ...todo, ...todoUpdate } : todo
    })
    return { todos: todosUpdated }
  }),
}))

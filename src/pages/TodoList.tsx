import { useStore } from "../stores/data.store"

export const TodoList = () => {

  const todos = useStore(state => state.todos)
  const addTodo = useStore(state => state.addTodo)
  const updateTodo = useStore(state => state.updateTodo)
  const deleteTodo = useStore(state => state.deleteTodo)

  const handleAddTodo = () => {
    const todoText = prompt("New todo pleeeze")
    if(!todoText) return

    addTodo({_id: Date.now().toString(), text: todoText})
  }

  const handleEditTodo = (todoId: string) => {
    const todoText = prompt("New todo title pleeeze")
    if (!todoText) return

    updateTodo(todoId, { text: todoText })
  }

  return (
    <div>
      <h2>TodoList</h2>
      {
        todos.map(todo => (
          <div key={todo._id}>
            <span>{todo.text} </span>
            <button onClick={ () => handleEditTodo(todo._id) }>Edit</button>
            <button onClick={ () => deleteTodo(todo._id) }>X</button>
          </div>
        ))
      }
      <button onClick={ handleAddTodo }>Add</button>
    </div>
  )
}
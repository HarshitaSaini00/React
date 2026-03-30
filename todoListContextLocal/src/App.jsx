import { useState ,useEffect } from 'react'
import {TodoProvider} from './Contexts/TodoContext'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    console.log("type:", typeof todo) // temporary check
    setTodos((prev) => [...prev, {
      id: Date.now(),
      todo: todo,
      completed: false,
    }])
}
  const updateTodo =(id, todo) =>{
    setTodos ((prev)=>prev.map ((prevTodo)=>(prevTodo.id ===id ?todo :prevTodo)))
  }
  /* setTodos me humne idhar previour todo pass ki hai or fir humne saare previous todos par loop lagaya hai prev. map karke and prevTodo ki id ki value us id se match karti hai jo humme chahiye to us id par new todo add kardo warna previous wala todo rahnedo */

  const deleteTodo =(id)=>{
    setTodos((prev)=> prev.filter((todo)=> todo.id !==id))
  }
  /* idhar humne deleteTodos function banaya hai and idhar humne map ko use nhi kiya filter use kiya hai and filter sirf true conditions par hi work karta hai  */

  const toggleComplete =(id) =>{
    setTodos ((prev) =>prev.map ((prevTodo)=>prevTodo.id=== id?{...prevTodo , completed : !prevTodo.completed}:prevTodo))
  }
  /*idhar humne toggleComplete function banaya hai and idhar humne map ko use kiya hai and map har previous todo par loop lagata hai or agar id match karti hai to us todo ke completed property ko reverse kardo warna previous wala todo rahnedo */

  useEffect(() =>{
    const todos =JSON.parse(localStorage.getItem('todos'))

    if(todos && todos.length >0){
      setTodos(todos)
    }
  },[])
  /* idhar humne useEffect ka use kiya hai taki jab bhi app load ho to localStorage se todos ko get kar sake or agar todos exist karte hai to unhe setTodos ke through state me set kar de */

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])
  /* idhar humne useEffect ka use kiya hai taki jab bhi todos state change ho to usse localStorage me save kar sake */






  return (
    <TodoProvider value ={{todos ,addTodo ,updateTodo , deleteTodo , toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                            <div key={todo.id}
                            className="w-full">
                                <TodoItem todo={todo} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App

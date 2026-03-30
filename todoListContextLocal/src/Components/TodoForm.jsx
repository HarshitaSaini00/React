import React from 'react'
import { useState } from 'react'
import { useTodo } from '../Contexts/TodoContext'
function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e)=>{
        e.preventDefault()
        
        
        if(!todo) return /* idhar humne check kiya hai ki agar todo empty hai to kuch bhi return mat karo yani function ko exit kar do */
        

        addTodo (todo) /* idhar humne addTodo function ko call kiya hai aur usme todo ko pass kiya hai aur trim() method ka use kiya hai taki agar user ne todo ke aage ya peeche extra spaces diye hai to unhe remove kar sake */
        setTodo("") /* idhar humne addTodo function ko call kiya hai aur usme ek object pass kiya hai jisme todo aur completed property hai or fir humne setTodo ko empty string se set kar diya hai taki input field clear ho jaye */
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) =>setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;
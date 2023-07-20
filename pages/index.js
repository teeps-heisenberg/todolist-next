import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [todo,setTodo] = useState({title:"",desc:""});

  const addTodo = ()=> {
    let todos = localStorage.getItem("todos");
    if(todos){
      let todosJSON = JSON.parse(todos);
      
      if(todosJSON.filter(value => {return value.title == todo.title}).length > 0){
        alert('Todo Already Exists');
      }
      else{
        todosJSON.push(todo);
        localStorage.setItem("todos",JSON.stringify(todosJSON));
        alert('Todo has been Added!');
        setTodo({title:'',desc:''});
      }
    }
    else{
      localStorage.setItem("todos",JSON.stringify([todo]));
    }
  }
  
  const onChanged = (e)=>{
    setTodo({...todo,[e.target.name]:e.target.value});
    console.log(todo);
  }
  return (
    <div className='my-2 font-semibold text-3xl'>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div class="bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Add Todo</h2>
            <div class="relative mb-4">
              <label for="title" class="leading-7 text-sm text-gray-600">Todo Title</label>
              <input value={todo.title} onChange={onChanged} type="text" id="title" name="title" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div class="relative mb-4">
              <label for="desc" class="leading-7 text-sm text-gray-600">Todo Text</label>
              <input value={todo.desc} onChange={onChanged} type="text" id="desc" name="desc" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button onClick={addTodo} class="text-white  bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-fit">Add Todo</button>
            <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

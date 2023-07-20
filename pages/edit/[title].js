import React from 'react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const EditTodo = () => {
    const router = useRouter();
    const title = router.query.title;
    const [todo,setTodo] = useState({title:"",desc:""});
    // const [todoTitle, setTodoTitle] = useState('');
    // const [todoDesc, setTodoDesc] = useState('');
    // const [allTodos,setAllTodos] = useState([]);


    useEffect(() => {
        // let tempTodos = localStorage.getItem("todos");
        // let allTodosJSON = JSON.parse(tempTodos);
        // setAllTodos(allTodosJSON);
        // let todoToEdit = allTodosJSON.filter((item) => {
        //     return item.title.toLowerCase() == title;
        // })
        // setTodoTitle(todoToEdit[0].title);
        // setTodoDesc(todoToEdit[0].desc);

    }, []);

    const editTodo = ()=>{
        // let getTodo = allTodos.filter(item=>{ return item.title == todoTitle })[0]
        // let editedTodo = {title:todoTitle,desc:todoDesc}
        
        // console.log(getTodo);
        let todos = localStorage.getItem('todos');
        console.log(todos);
        let todosJSON = JSON.parse(todos);
        console.log(todosJSON[0].title);
        if(todosJSON.filter(item=>{return item.title.toLowerCase() == title}).length > 0){
            let index = todosJSON.findIndex(item=>{return item.title.toLowerCase ()== title});
            
            todosJSON[index].title = todo.title;
            todosJSON[index].desc = todo.desc;

            localStorage.setItem('todos',JSON.stringify(todosJSON))
            alert('Todo has been Updated');
        }
        else{
            alert('Todo Does not Exist');
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
                        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Edit Todo</h2>
                        <div class="relative mb-4">
                            <label for="title" class="leading-7 text-sm text-gray-600">Todo Title</label>
                            <input value={todo.title} onChange={onChanged} type="text" id="title" name="title" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative mb-4">
                            <label for="desc" class="leading-7 text-sm text-gray-600">Todo Text</label>
                            <input value={todo.desc} onChange={onChanged} type="text" id="desc" name="desc" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button onClick={editTodo} class="text-white  bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-fit">Edit Todo</button>
                        <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default EditTodo
import {useEffect, useState} from "react";
import {todosService} from "../../services";
import {Todo} from "../Todo/Todo";

const Todos = () => {

    const [todos, setTodos] = useState([]);
todosService.getAll().then(({data})=>setTodos([...data]))
    useEffect(() => {

    }, [])

    return (
        <div>
            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export {Todos};
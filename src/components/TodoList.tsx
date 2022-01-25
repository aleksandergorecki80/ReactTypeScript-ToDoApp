import React from "react";

interface TodoListProps {
    items: { id: string, text: string }[];
    onRemoveTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) =>{
    // const todos = [
    //     {id: 1, text: 'Finish the corse'},
    //     {id: 2, text: 'Get a job'},
    // ]
    return (
        <ul>
            {props.items.map((todo) => {
                return <li key={todo.id}>
                    <span>{ ` ${todo.id} - ${todo.text} ` }</span>
                    <button onClick={props.onRemoveTodo.bind(null, todo.id)}>DELETE</button>
                    </li>
            })}
        </ul>
    )
}

export default TodoList;
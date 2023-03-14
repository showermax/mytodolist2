import React, {useRef} from 'react';
import {FilterType, TaskType} from "./App";
type PropsType = {
    title: string
    tasks: Array<TaskType>
    remove: (taskId: string)=> void
    filter: (s: FilterType)=> void
    add : Function
}
export function Todolist (props: PropsType) {

    const taskInputref = useRef<HTMLInputElement>(null)

    const onAddButtonHandler = () =>{
        props.add(taskInputref.current!.value)
    }
    return (
        <div>
            <h2>{props.title}</h2>
            <input ref={taskInputref}/>
            <button onClick={onAddButtonHandler}> Add new </button>
            <ol>
                {props.tasks.map((el,i) =>
                    <li key={i}>
                        <input type="checkbox" checked={el.isDone}/>{el.name}
                        <button style={{margin: '5px'}} onClick={() => props.remove(el.id)}>🚽</button>
                    </li>)}
            </ol>
            <button onClick={()=>props.filter('All')}>All</button>
            <button onClick={()=>props.filter('Done')}>Done</button>
            <button onClick={()=>props.filter('To-do')}>To-do</button>
        </div>
    )
}
console.log('hi')
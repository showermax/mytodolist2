import React from 'react';
import {FilterType, TaskType} from "./App";
type PropsType = {
    title: string
    tasks: Array<TaskType>
    remove: (taskId: string)=> void
    filter: (s: FilterType)=> void
    add : Function
}
export function Todolist (props: PropsType) {
    // const onClickHandler = (taskId: string) =>{
    //     props.remove(taskId)
    // }
    return (
        <div>
            <h2>{props.title}</h2>
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
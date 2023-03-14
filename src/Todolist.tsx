import React, {ChangeEvent, useRef, useState} from 'react';
import {FilterType, TaskType} from "./App";

type PropsType = {
    title: string
    tasks: Array<TaskType>
    remove: (taskId: string) => void
    filter: (s: FilterType) => void
    add: (n: string) => void
    change: (s: string) => void
    main: boolean
}

export function Todolist(props: PropsType) {

    //const taskInputref = useRef<HTMLInputElement>(null)
    const [taskName, setTaskName] = useState('')

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTaskName(e.currentTarget.value)
    }
    const onAddButtonHandler = () => {
        props.add(taskName)
        setTaskName('')
    }

    // const onChangeTaskHandler =()=>{
    //     props.tasks.id
    // }
    return (
        <div>
            <h2>{props.title}</h2>
            {props.main && <div>
                <input onChange={onChangeInputHandler} value={taskName}/>
                <button onClick={onAddButtonHandler}> Add new</button>
            </div>}
            <ol>
                {props.tasks.map((el, i) =>
                    <li key={i}>
                        <input type="checkbox" checked={el.isDone} onChange={() => {
                            props.change(el.id)
                        }}/>{el.name}
                        <button style={{margin: '5px'}} onClick={() => props.remove(el.id)}>🗑</button>
                    </li>)}
            </ol>
            {/*<div>*/}
            {/*    <button onClick={() => props.filter('All')}>All</button>*/}
            {/*    <button onClick={() => props.filter('Done')}>Done</button>*/}
            {/*    <button onClick={() => props.filter('To-do')}>To-do</button>*/}
            {/*</div>}*/}
        </div>
    )
}

console.log('hi')
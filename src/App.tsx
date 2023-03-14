import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Todolist} from "./Todolist";
import { v1 } from 'uuid';

export type TaskType ={
    id: string
    name: string
    isDone: boolean
}
export type FilterType = 'All'| 'Done' | 'To-do'

function App() {
    const [listOfTasks, setListOfTasks] = useState<Array<TaskType>> ([
        {id: v1(), name: 'that\'s your first task', isDone:false},
        {id: v1(), name: 'that\'s your second task', isDone:false},
        {id: v1(), name: 'that\'s your third task', isDone:false},
        {id: v1(), name: 'that task is done', isDone:true},
        {id: v1(), name: 'that task is done', isDone:true}
    ])
    const [filter, setFilter] = useState<FilterType>('All')
    // removeTask
    const removeTask = (taskId: string) => {
        setListOfTasks(listOfTasks.filter(el=>el.id !== taskId))
    }
    // filterTask
    let filteredListOfTasks=listOfTasks
    if (filter==='Done') { filteredListOfTasks = listOfTasks.filter(el=>el.isDone)}
    if (filter==='To-do') { filteredListOfTasks = listOfTasks.filter(el=>!el.isDone)}
    const filterTask = (s: FilterType) => setFilter(s)
    //addTask
    const addTask = (newTask: TaskType) => {
        setListOfTasks([...listOfTasks, newTask])
    }
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <img src={logo} className="App-logo" alt="logo" />
         All you to get things done
        </div>
      </header>
        <div className="main">
            <div className="card">
                <Todolist title={'To-do'} tasks={filteredListOfTasks} remove={removeTask} filter={filterTask} add={addTask}/>
            </div>
            <div className="card">
                <Todolist title={'Done'} tasks={filteredListOfTasks} remove={removeTask} filter={filterTask} add={addTask}/>
            </div>
    </div>
    </div>
  );
}

export default App;

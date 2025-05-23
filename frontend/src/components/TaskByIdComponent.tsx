import { useState, Dispatch, SetStateAction } from "react";
import Task from "../models/Task";
import TaskComponent from "./TaskComponent";

export default function TaskByIdComponent ( props: { taskId: string } ) {

    const [ task , setTask ] = useState() as [ Task | undefined , Dispatch<SetStateAction<Task>>]

    async function getTaskById( id: string ) {
        const task = await Task.read(id)
        if (task === undefined) throw new Error(`There is no task with id "${id}"`)
        setTask(task)
    }

    getTaskById( props.taskId )

    if ( task instanceof Task ) return <TaskComponent task={task}/>
    else return <>...</> //TODO: Loading... component

}
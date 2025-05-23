import { useContext } from "react";
import TaskComponent from "./TaskComponent";
import { globalContext } from "./hooks/GlobalContextHook";

export default function TaskByIdComponent ( props: { taskId: string } ) {

    const { globalStates } = useContext(globalContext)

    const task = globalStates.tasks.find( task => task.id === props.taskId )

    if (task === undefined) throw new Error(`There is no task with id "${props.taskId}"`)

    return <TaskComponent task={task}/>

}
import { FlatList } from "react-native";
import Task from "../models/Task";
import TaskComponent from "./TaskComponent";
import { useContext } from "react";
import { globalContext } from "./hooks/GlobalContextHook";

export default function TaskListComponent (props: {tasks: Task[]}) {

    const {globalDispatchers: {updateTaskInGlobalState}} = useContext(globalContext)

    return <FlatList
        data={props.tasks}
        /**
         * FlatList provides a ListRenderItems: { index, item, separators}
         * so we destructure to get only item: ( {item: task} )
         */ 
        renderItem={( {item: task} ) => <TaskComponent task={task} onTaskUpdate={updateTaskInGlobalState}/>} 
        keyExtractor={item => item.id ?? '' }
    />

}


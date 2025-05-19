import { FlatList } from "react-native";
import { Task } from "../models/Task";
import TaskComponent from "./TaskComponent";

export default function TaskListComponent (props: {data: Task[]}) {

    return <FlatList
        data={props.data}
        /**
         * FlatList provides a ListRenderItems: { index, item, separators}
         * so we destructure to get only item: ( {item: task} )
         */ 
        renderItem={( {item: task} ) => <TaskComponent task={task} updateTask={task.update}/>} 
        keyExtractor={item => item.id ? item.id : '' }
    />

}


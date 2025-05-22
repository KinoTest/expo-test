import { FlatList } from "react-native";
import Task from "../models/Task";
import TaskComponent from "./TaskComponent";

export default function TaskListComponent (props: {tasks: Task[]}) {

    return <FlatList
        data={props.tasks}
        /**
         * FlatList provides a ListRenderItems: { index, item, separators}
         * so we destructure to get only item: ( {item: task} )
         */ 
        renderItem={( {item: task} ) => <TaskComponent task={task}/>} 
        keyExtractor={item => item.id ?? '' }
    />

}


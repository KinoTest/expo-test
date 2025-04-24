import { FlatList } from "react-native";
import { Task } from "modelos_de_proba";
import TaskComponent from "./TaskComponent";


export default function TaskListComponent (props: {data: Task[]}) {

    return <FlatList
        data={props.data}
        renderItem={item => <TaskComponent task={item.item}/>}
        keyExtractor={item => item.id}
    />

}


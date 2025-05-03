import { FlatList } from "react-native";
import { Task } from "modelos_de_proba";
import TaskComponent from "./TaskComponent";
import TasksQueries from "@/lib/queries/TasksQueries";

const tasksQueries = new TasksQueries()

export default function TaskListComponent (props: {data: Task[]}) {

    return <FlatList
        data={props.data}
        renderItem={item => <TaskComponent task={item.item} updateTask={tasksQueries.putTask}/>}
        keyExtractor={item => item.id ? item.id : '' } //TODO: Make Task id mandatory
    />

}


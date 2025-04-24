import { Text } from "react-native";
import { Task } from "modelos_de_proba";

export default function TaskComponent (props: {task: Task}) {

    return <Text>{props.task.description}</Text>

}


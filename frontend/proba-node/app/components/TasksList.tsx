import { FlatList, Text } from "react-native";
import Task from "@/lib/Models/Task";

export default function TaskList (props: {data: Task[]}) {

    return <FlatList
        data={props.data}
        renderItem={item => <Text>{item.item.description}</Text>}
        keyExtractor={item => item.id}
    />

}


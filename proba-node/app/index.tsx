import { Text, View, FlatList } from "react-native";
import TasksORM from "@/lib/ORMs/TasksORM";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <FlatList data={TasksORM.all_tasks} renderItem={item => <Text>{item.item.description}</Text>} keyExtractor={item => item.id}/>

    </View>
  );
}

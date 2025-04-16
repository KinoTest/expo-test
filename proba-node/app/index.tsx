import { View } from "react-native";
import TasksORM from "@/lib/Queries/TasksORM";
import FetchHandler from "./components/FetchHandler";
import TaskList from "./components/TasksList";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <FetchHandler
        fetchMethod={new TasksORM.getAllTasks}
        renderComponent={TaskList}
      />

    </View>
  );
}

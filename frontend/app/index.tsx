import { View } from "react-native";
import FetchHandler from "./components/FetchHandler";
import TaskList from "./components/TasksList";
import TasksQueries from "@/lib/queries/TasksQueries";

const tasksService = new TasksQueries()

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
        fetchMethod={ tasksService.getAllTasks }
        renderComponent={TaskList}
      />

    </View>
  );
}

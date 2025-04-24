import { View } from "react-native";
import FetchHandler from "./services/FetchHandlerService";
import TaskListComponent from "./components/TasksListComponent";
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
        renderComponent={TaskListComponent}
      />

    </View>
  );
}

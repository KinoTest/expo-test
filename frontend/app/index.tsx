import { View, Text } from "react-native";
import { i18n } from "@/locales/i18n";

import FetchHandler from "./services/FetchHandlerService";
import TaskListComponent from "./components/TasksListComponent";
import TasksQueries from "@/app/queries/TasksQueries";

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

      <Text>{i18n.t("tasks_list_title", {name: "Toño"})}</Text>

      <FetchHandler
        fetchMethod={ tasksService.getAllTasks }
        renderComponent={TaskListComponent}
      />

    </View>
  );
}

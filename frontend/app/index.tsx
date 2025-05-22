import { View, Text } from "react-native";
import { i18n } from "@/locales/i18n";

import FetchHandler from "./services/FetchHandlerService";
import TaskListComponent from "./components/TasksListComponent";
import { Task } from "./models/Task";

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
        fetchMethod={ Task.readAll }
        renderComponent={TaskListComponent}
      />

    </View>
  );
}

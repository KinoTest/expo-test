import { View, Text } from "react-native";
import { i18n } from "@/locales/i18n";

import { globalContext, GlobalStateHook } from "./components/hooks/GlobalStateHook";

import TaskListComponent from "./components/TasksListComponent";
import TasksServices from "./services/TasksServices";
import { useContext } from "react";

const {globalStates} = useContext(globalContext)

export default function Index() {
  return (
    <GlobalStateHook>
      <TasksServices.InitializeTasksList>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >

          <Text>{i18n.t("tasks_list_title", {name: "Toño"})}</Text>

          <TaskListComponent tasks={globalStates.tasks}/>

        </View>
      </TasksServices.InitializeTasksList>
    </GlobalStateHook>
  );
}

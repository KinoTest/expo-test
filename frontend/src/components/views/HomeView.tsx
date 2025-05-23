import { useContext } from "react"
import { globalContext } from "../hooks/GlobalContextHook"
import { View, Text } from "react-native"
import TaskListComponent from "../TasksListComponent"
import { i18n } from "@/locales/i18n"

export default function HomeView () {

    const { globalStates } = useContext(globalContext)

    return <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >

        <Text>{i18n.t("tasks_list_title", {name: "Toño"})}</Text>

        <TaskListComponent tasks={globalStates.tasks}/>

      </View>
}

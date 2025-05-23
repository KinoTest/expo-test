import { Button, Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import ViewComponent from "./wrappers/ViewComponent";
import Task from "../models/Task";
import { useState } from "react";
import { i18n } from "@/locales/i18n";
import { defaultMargins, defaultSpacing, taskComponentStyle } from "../Styles";
import SwitchComponent from "./SwitchComponent";
import { useStateForPath } from "@react-navigation/native";

export default function TaskComponent (props: {task: Task }) {

    const router = useRouter()
    const currenRouteList = useStateForPath() ?? {routes:[{name:'/'}]}

    const [currentTask, setActualTask] = useState(props.task)

    const [inEditionMode, setInEditionMode] = useState(false)

    function goToTask() {
        router.navigate(`${currenRouteList.routes[0].name}/${props.task.id}`)
    }

    function enableEditionMode() {
        setInEditionMode(true)
    }

    function disableEditionMode() {
        setInEditionMode(false)
    }

    async function onSwitchChannge(checked: boolean) {
        const newTask = new Task(currentTask.description, checked, currentTask.id)
        try {
            await newTask.update()
            setActualTask(newTask)
        }
        catch (exception) {
            throw exception //TODO: Exception handler
        }
    }

    async function onChangeText(text: string) {
        const newTask = new Task(text, currentTask.done, currentTask.id)
        try {
            await newTask.update()
            setActualTask(newTask)
        }
        catch (exception) {
            throw exception //TODO: Exception handler
        }
    }

    return <ViewComponent style={taskComponentStyle}>

        { inEditionMode ?

            <TextInput
                onChangeText={onChangeText}
                onBlur={disableEditionMode}
                autoFocus={true}
                value={currentTask.description}
                placeholder="useless placeholder"
                style={defaultSpacing}
            />

            :

            <TouchableOpacity onPress={enableEditionMode}>
                <Text style={defaultMargins}>
                    {currentTask.description}
                </Text>
            </TouchableOpacity>

        }

        <SwitchComponent description={i18n.t('done')} checked={currentTask.done} onToggle={onSwitchChannge}/>

        <Button onPress={goToTask} title="Go..."/>

    </ViewComponent>

}


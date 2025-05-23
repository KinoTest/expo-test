import { Text, TextInput, TouchableOpacity } from "react-native";
import ViewComponent from "./wrappers/ViewComponent";
import Task from "../models/Task";
import { useState } from "react";
import { i18n } from "@/locales/i18n";
import { defaultMargins, defaultSpacing, taskComponentStyle } from "../Styles";
import SwitchComponent from "./SwitchComponent";
import { useRouter } from "expo-router";
import { useRoute } from "@react-navigation/native";

export default function TaskComponent (props: {task: Task }) {

    const router = useRouter()
    const currenRoute = useRoute()

    const [currentTask, setActualTask] = useState(props.task)

    const [inEditionMode, setInEditionMode] = useState(false)

    function goToTask() {
        router.navigate(`${currenRoute.name}/${props.task.id}`)
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

        <TouchableOpacity onPress={goToTask}>
            <Text>Go...</Text>
        </TouchableOpacity>

    </ViewComponent>

}


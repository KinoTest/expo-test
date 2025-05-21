import { Text, TextInput, TouchableOpacity } from "react-native";
import ViewComponent from "./wrappers/ViewComponent";
import { Task } from "../models/Task";
import { useEffect, useState } from "react";
import { i18n } from "@/locales/i18n";
import { defaultMargins, defaultSpacing, taskComponentStyle } from "../Styles";
import SwitchComponent from "./SwitchComponent";

export default function TaskComponent (props: {task: Task, updateTask: (task: Task)=>any }) {

    const [actualTask, setActualTask] = useState(props.task)

    const [inEditionMode, setInEditionMode] = useState(false)

    function onSwitchChannge(checked: boolean) {
        const newTask = new Task(actualTask.description, checked, actualTask.id)
        setActualTask(newTask)
    }

    function enableEditionMode() {
        setInEditionMode(true)
    }

    function disableEditionMode() {
        setInEditionMode(false)
    }

    function onChangeText(text: string) {
        const newTask = new Task(text, actualTask.done, actualTask.id)
        setActualTask(newTask)
    }

    useEffect(()=>{
        props.updateTask(actualTask)
    },[
        actualTask,
    ])

    return <ViewComponent style={taskComponentStyle}>

        { inEditionMode ?

            <TextInput
                onChangeText={onChangeText}
                onBlur={disableEditionMode}
                autoFocus={true}
                value={actualTask.description}
                placeholder="useless placeholder"
                style={defaultSpacing}
            />

            :

            <TouchableOpacity onPress={enableEditionMode}>
                <Text style={defaultMargins}>
                    {actualTask.description}
                </Text>
            </TouchableOpacity>

        }

        <SwitchComponent description={i18n.t('done')} checked={actualTask.done} onToggle={onSwitchChannge}/>

    </ViewComponent>

}


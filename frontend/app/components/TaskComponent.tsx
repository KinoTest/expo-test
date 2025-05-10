import { Switch, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import KTViewComponent from "./KTViewComponent";
import { Task } from "modelos_de_proba";
import { useEffect, useState } from "react";
import { i18n } from "@/locales/i18n";
import { defaultMargins } from "../Styles";

export default function TaskComponent (props: {task: Task, updateTask: (task: Task)=>any }) {

    const [actualTask, setActualTask] = useState(props.task)

    const [isEnabled, setIsEnabled] = useState(actualTask.done)
    const [inEditionMode, setInEditionMode] = useState(false)

    function toggleSwitch() {
        setIsEnabled(!isEnabled)
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
        props.updateTask(actualTask)
    }

    useEffect(()=>{},[actualTask])

    return <KTViewComponent >
        { inEditionMode ?
            <TextInput
                onChangeText={onChangeText}
                onBlur={disableEditionMode}
                autoFocus={true}
                value={actualTask.description}
                placeholder="useless placeholder"
                keyboardType="numeric"
                style={defaultMargins}
            />
            :
            <TouchableOpacity onPress={enableEditionMode}>
                <Text style={defaultMargins}>
                    {actualTask.description}
                </Text>
            </TouchableOpacity>
        }
        <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={defaultMargins}
        />
        <Text>{i18n.t('done')}</Text>
    </KTViewComponent>

}


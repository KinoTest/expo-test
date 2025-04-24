import { Switch, Text, TextInput, View } from "react-native";
import { Task } from "modelos_de_proba";
import { useState } from "react";

export default function TaskComponent (props: {task: Task}) {

    const [isEnabled, setIsEnabled] = useState(props.task.done)
    const [inEditionMode, setInEditionMode] = useState(false)

    function toggleSwitch() {
        setIsEnabled(!isEnabled)
    }

    function onChangeText(text: string) {
        /**TODO: Actualizar props, actualizar modelo */
    }

    return <View>
        {/**TODO: if inEditionMode, on touch, toggle inEditionMode */}
        { inEditionMode ?
            <TextInput
                onChangeText={onChangeText}
                value={props.task.description}
                placeholder="useless placeholder"
                keyboardType="numeric"
            />
            :
            <Text>
                {/**TODO: if ! inEditionMode, on touch, toggle inEditionMode */}
                {props.task.description}
            </Text>
        }
        <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    </View>

}


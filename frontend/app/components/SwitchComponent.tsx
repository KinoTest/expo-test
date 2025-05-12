import { Switch, Text, View} from "react-native";
import { switchComponentStyle, defaultMargins } from "../Styles";

export default function SwitchComponent (props: {description: string, checked: boolean, onToggle: (value: boolean)=>void | Promise<void> }) {

    return <View style={switchComponentStyle}>

        <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={props.checked ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={props.onToggle}
            value={props.checked}
            style={defaultMargins}
        />

        <Text>{props.description}</Text>
        
    </View>

}


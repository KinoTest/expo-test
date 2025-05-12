import { Switch, Text, View} from "react-native";
import { switchComponent, defaultMargins } from "../Styles";

export default function SwitchComponent (props: {description: string, onToggle: EventListener }) {

    return <div style={switchComponent}>
        <Switch style={defaultMargins}/>
        <Text>{props.description}</Text>
    </div>

}


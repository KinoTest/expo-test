import { StyleProp, View, ViewStyle } from "react-native";

export default function ViewComponent ( props: { children: React.ReactNode, style: StyleProp<ViewStyle>}) {
    return <View style={props.style}>
        { props.children  }
    </View>
}
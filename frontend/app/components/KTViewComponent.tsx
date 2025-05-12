import { StyleProp, View, ViewStyle } from "react-native";

function KTViewComponent ( props: { children: React.ReactNode, style: StyleProp<ViewStyle>}) {
    return <View style={props.style}>
        { props.children  }
    </View>
}

export default KTViewComponent
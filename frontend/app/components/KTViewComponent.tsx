import { PropsWithChildren, cloneElement, ReactElement } from "react";
import { View } from "react-native";
import { container } from "../Styles";

function KTViewComponent ( props: PropsWithChildren) {
    return <View style={container}>
        { props.children  }
    </View>
}

export default KTViewComponent
import { PropsWithChildren } from "react";
import { View } from "react-native";
import { container } from "../Styles";

function KTViewComponent ( props: PropsWithChildren) {
    return <View style={{flexDirection: "row"}}>
        { props.children  }
    </View>
}

export default KTViewComponent
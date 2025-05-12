import { StyleProp, StyleSheet, ViewStyle } from "react-native"

const defaultMarginValue = 10
const defaultPaddingValue = 10

const { defaultMargins } = StyleSheet.create ({
    defaultMargins: {
        margin: defaultMarginValue
    }
})

const { defaultPaddings } = StyleSheet.create ({
    defaultPaddings: {
        margin: defaultPaddingValue
    }
})

const { container } = StyleSheet.create ({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        shadowRadius: 5,
        shadowColor: 'rgb(180,180,180)',
        ...defaultMargins,
        ...defaultPaddings
    }
})

const { cardComponent } = StyleSheet.create({
    cardComponent: {
        ...defaultMargins
    }
} ) 

const cosa = StyleSheet.create({
    switchComponent: {
        flex: 1,
        flexDirection: "row"
    }
})

const { switchComponent } = cosa // TODO: What the fuking fuck!!!

export {
    defaultMargins,
    container,
    cardComponent,
    switchComponent
}
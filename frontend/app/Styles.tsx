import { StyleSheet } from "react-native"

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

const { cardElement } = StyleSheet.create({
    cardElement: {
        ...defaultMargins
    }
}) 

export {
    defaultMargins,
    container,
    cardElement
}
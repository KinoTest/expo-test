import { StyleSheet } from "react-native"

/**
 * 
 * Dispersion is reject on export, so we will use specific initialization for dispersion 
 * before export.
 * 
 * Dispersion is necesary becouse a weird behavior on StyleSheet.create including some
 * some properties like flex or flexDirection.
 * 
 * defaultStyles implements theme constants.
 * 
 */

const defaultMarginValue = 10
const defaultPaddingValue = 10

const defaultsStyles = StyleSheet.create ({
    defaultMargins: {
        margin: defaultMarginValue,
    },
    defaultPaddings: {
        padding: defaultPaddingValue,
    },
    defaultSpacing: {
        margin: defaultMarginValue,
        padding: defaultPaddingValue,
    }
})

const {
    defaultMargins,
    defaultPaddings,
    defaultSpacing,
} = defaultsStyles

const componentsStyles = StyleSheet.create ({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        shadowRadius: 5,
        shadowColor: 'rgb(180,180,180)',
        ...defaultSpacing,
    },
    cardComponent: {
        ...defaultMargins,
    },
    switchComponentStyle: {
        flexDirection: "row",
        alignItems: "center",
    },
    taskComponentStyle: {
        flexDirection: "column",
        ...defaultSpacing,
    },
})

const {
    cardComponent,
    container,
    switchComponentStyle,
    taskComponentStyle,
} = componentsStyles


export {
    defaultMargins,
    defaultPaddings,
    defaultSpacing,
    container,
    cardComponent,
    switchComponentStyle,
    taskComponentStyle,
}
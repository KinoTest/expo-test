import { Platform } from "react-native"

/** Parametros configurables para entornos de desenvolvemento, web, Andorid...*/

const runningInBrowser = Platform.OS === 'web'

const backend = {
    protocol: runningInBrowser ? 'http' : 'https',
    host: runningInBrowser ? 'localhost' : 'kinotest.me',
    port: runningInBrowser ? '3000' : '443',
}

const backendHostURL = `${backend.protocol}://${backend.host}:${backend.port}`

export {
    runningInBrowser,
    backend,
    backendHostURL
}
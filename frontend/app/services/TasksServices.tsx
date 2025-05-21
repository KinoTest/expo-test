import { PropsWithChildren, useContext, useEffect } from "react";
import { Task } from "../models/Task";
import { globalContext } from "../components/hooks/GlobalStateHook";

const {globalStates, globalStatesSetters} = useContext(globalContext)

export default class TasksServices {

    static InitializeTasksList( props: PropsWithChildren) {

        async function initializeTasksList() {
            if (!globalStates.initialized) {
                globalStatesSetters.setTasks( await Task.readAll() )
                globalStatesSetters.setInitialized(true)
            }
        }

        useEffect(()=>{
            initializeTasksList() 
        }, [])

        return <>
            {props.children}
        </>

    }
    
}
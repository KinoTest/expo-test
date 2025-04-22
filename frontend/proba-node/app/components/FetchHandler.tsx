import { useEffect, useState } from "react"

export default function FetchHandler ( props: {
    fetchMethod: ()=>Promise<any>,
    renderComponent: React.ComponentType<{data: any}>
}) {

    const loadingOutput = <>Loading...</>
    const [data, setData] = useState<any>()
    const [error, setError] = useState<null|Error>()
    const [output, setOutput] = useState(loadingOutput)

    useEffect(()=>{
        props.fetchMethod()
            .then(
                newData => {
                    setData(newData)
                    setError(null)
                }
            )
            .catch(
                newError => {
                    setError(newError)
                    setData(null)
                }
            )
    }, [])

    useEffect(()=>{
        if (error) setOutput(<>{error.message}</>)
        else setOutput(<props.renderComponent data={data} />)
    }, [data, error])

    return output

}
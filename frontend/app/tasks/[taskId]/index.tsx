import { useLocalSearchParams } from "expo-router";

export default function TaskView() {

  const { taskId } = useLocalSearchParams();

  return (
    <>{taskId}</>
  )
  
}

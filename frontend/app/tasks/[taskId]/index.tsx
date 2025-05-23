import TaskByIdComponent from "@/src/components/TaskByIdComponent";
import { useLocalSearchParams } from "expo-router";

export default function TaskView() {

  const { taskId } = useLocalSearchParams();

  const id = Array.isArray(taskId) ? taskId[0] : taskId

  return (
    <TaskByIdComponent taskId={id}/>
  )
  
}

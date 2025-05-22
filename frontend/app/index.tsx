import { GlobalContextHook } from "./components/hooks/GlobalContextHook";
import HomeView from "./components/views/HomeView";
import InitializeContextHook from "./components/hooks/InitializeContextHook";

export default function Index() {

  return (
    <GlobalContextHook>
      <InitializeContextHook>
        <HomeView/>
      </InitializeContextHook>
    </GlobalContextHook>
  )
  
}

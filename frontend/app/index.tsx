import { GlobalContextHook } from "../src/components/hooks/GlobalContextHook";
import HomeView from "../src/components/views/HomeView";
import InitializeContextHook from "../src/components/hooks/InitializeContextHook";

export default function Index() {

  return (
    <GlobalContextHook>
      <InitializeContextHook>
        <HomeView/>
      </InitializeContextHook>
    </GlobalContextHook>
  )
  
}

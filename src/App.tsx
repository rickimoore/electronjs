import Authentication from "./layouts/Authentication";
import Dashboard from "./layouts/Dashboard";
import { useRecoilValue} from 'recoil';
import {appView} from "./recoil/atoms";
import {AppView} from "./constants/enums";

const App = () => {
  const view = useRecoilValue(appView);

  switch (view) {
    case AppView.DASHBOARD:
      return <Dashboard/>
    default:
      return <Authentication/>;
  }
}

export default App;

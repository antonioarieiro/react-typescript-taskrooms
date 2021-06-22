import  { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

function App() {

  return (
    <BrowserRouter>
        <Switch>
          <AuthContextProvider>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/room/new" component={NewRoom}/>
          </AuthContextProvider>
        </Switch>
    </BrowserRouter>
  );
}

export default App;

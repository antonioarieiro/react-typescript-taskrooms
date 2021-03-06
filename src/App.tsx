import  { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";

function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/room/new"  component={NewRoom}/>
          <Route path="/room/:id" component={Room}/>
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;

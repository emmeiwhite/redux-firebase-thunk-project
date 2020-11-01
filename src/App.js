import './App.css';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import NavbarMain from './components/layout/NavbarMain'
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarMain/>
        <Switch>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/" component={Dashboard}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

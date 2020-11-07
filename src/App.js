import {BrowserRouter,Switch, Route} from 'react-router-dom';
import NavbarMain from './components/layout/NavbarMain';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import CreateProject from './components/projects/CreateProject';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <NavbarMain/>
      <div className="container mt-5">
        <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/project/:id" component={ProjectDetails}/>
            <Route exact path="/signin" component={Signin}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/create" component={CreateProject}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavbarMain from "./components/layout/NavbarMain";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import CreateProject from "./components/projects/CreateProject";
import Posts from "./components/posts/Posts";
import Post from "./components/post/Post";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavbarMain />
      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/create" component={CreateProject} />
          <Route exact path="/posts" component={Posts} />
          <Route path="/posts/:post_id" component={Post} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

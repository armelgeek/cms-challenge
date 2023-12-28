import "../App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Editor from "../Editor";
import UserLibrary from "../components/editor/UserLibrary";
import PrivateRoute from "./PrivateRoute";
import Home from "../Home";
import PublicRoute from "./PublicRoute";
import UserRoute from "./UserRoute";
import LoginRegisterPage from "../pages/Auth/LoginRegisterPage";
import ForgotResetPassword from "../pages/Auth/ForgotResetPassword";
import Account from "../pages/Account";
import AddProject from "../pages/Projects/add";
import Projects from "../pages/Projects";

const Index = () => {
  return (
    <div className="relative ">
     <Router>
        <Switch>
          <PublicRoute path="/" exact component={Home} />
          <UserRoute path="/login" exact component={LoginRegisterPage} />
          <PrivateRoute path="/account" exact component={Projects} />
          <UserRoute path="/forgot-password" exact component={ForgotResetPassword} />
          <PrivateRoute path="/project/add" exact component={AddProject} />
          <PrivateRoute path="/projects" exact component={Projects} />
          
          <Route path="/editor/:id" exact component={Editor} />
          <Route path="/uikit" exact component={UserLibrary} />
        </Switch>
      </Router>

    </div>
  );
};

export default Index;

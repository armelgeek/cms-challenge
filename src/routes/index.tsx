import "../App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Editor from "../Editor";
import UserLibrary from "../components/editor/UserLibrary";
import FontPicker from "../FontPicker";
import PrivateRoute from "./PrivateRoute";

const Index = () => {
  return (
      <div className="relative ">
      <Router>
        <Switch>
          <Route path="/" exact component={Editor}/>
          <Route path="/uikit" exact component={UserLibrary}/>
        </Switch>
      </Router>
      
  </div>
  );
};

export default Index;

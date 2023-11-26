import "../App.css";
import {Helmet} from "react-helmet";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Tabs from "../components/desktop/Tabs";
import {useGetter} from "../store";
import Editor from "../Editor";
import {Dashboard} from "../components/desktop/Dashboard";
import UserLibrary from "../components/editor/UserLibrary";
import FieldTest from "../FieldTest";
import Test from "../Test";

const Index = () => {
  return (
      <div className="relative ">
        {/**<BlockLink/>
        <BlockImageUrl/>
        <BlockHeading/>
        <BlockEditContent/>
       **/}
     
      <Router>
        <Switch>
          <Route  path="/" exact component={Dashboard}/>
          <Route path="/editor" exact component={Editor}/>
          <Route path="/uikit" exact component={UserLibrary}/>
        </Switch>
      </Router>
      
  </div>
  );
};

export default Index;

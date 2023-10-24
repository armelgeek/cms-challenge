import "../App.css";
import { Route,  BrowserRouter as Router , Switch } from "react-router-dom";
import Home from "../Home";
import LoginPage from "../pages/user/LoginPage";
import RegisterPage from "../pages/user/RegisterPage";
import RedirectRoute from "../routes/RedirectRoute";
import Tabs from "../components/desktop/Tabs";
import Test from "../Test";
import Element from "../utils/tail/element";
import { useEffect } from "react";
import { useDispatch, useGetter } from "../store";
import Editor from "../Editor";
const Index = () => {
  const groups = new Element().Groups()
  const dispatch = useDispatch('editor','setInfo');
  const tabs = useGetter('desktop', 'tabs', []);
  const createEmptyBlock = useDispatch('editor','createEmptyBlock');
  useEffect(()=>{
    dispatch({
      prop:'elements',
      value:groups 
    })
  },[])
  return (
      <>
      <button className="mt-3" onClick={createEmptyBlock}>New Template</button>
      {tabs.length>0 && <Tabs/>}
      <Router>
        <Switch>
          <Route path="/" exact component={Editor}/>
        </Switch>
      </Router>

  </>
  );
};

export default Index;

import "./App.css";
import React from "react";
import Module from "./components/museum-events";
import Module2 from "./components/museum-events2";
import Module3 from "./components/museum-events3";


import {
  useLocation,
  Link,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";





function App() {
 
 
  return (
    
    <Router>
      <div class="class" >
        
      <header >

        <Link to="/"><button className="button ">Home</button></Link>
        <Link to="/Minsk"><button className="button">Minsk</button></Link>
        <Link to="/Grodno"><button className="button">Grodno</button></Link>
        <Link to="/Moscow"><button className="button">Moscow</button></Link>
        <Link to="/Paris"><button className="button">Paris</button></Link>
        <Link to="/review"><button className="button ">review</button></Link>
        <Link to="/temporary museum"><button className="button ">temporary museum</button></Link>
      </header>
      </div>
   
        
          
            <div class="class2">
            <Switch>

              <Route path="/Minsk">
                <h1>Музей:</h1>
                <Module date='01/02/2002'/>
              </Route>

              <Route path="/Grodno">
                <h1>Музей:</h1>
                <Module date='01/03/2002'/>
              </Route>

              <Route path="/Moscow">
                <h1>Музей:</h1>
                <Module date='01/04/2002'/>
              </Route>

              <Route path="/Paris">
                <h1>Музей:</h1>
                <Module date='01/05/2002'/>
              </Route>

              <Route path="/temporary museum">
                <h1>Временный музей:</h1>
                <Module3 date='02/05/2002'/>
              </Route>

              <Route path="/review">
                <h1>Отзывы:</h1>
                <Module2 date='03/05/2002'/>
              </Route>


              <Route path="/">
              <h1>Добро пожаловать на наш сайт о музеях</h1>
              </Route>

              <Route path="*">
                <NoMatch />
              </Route>

            </Switch>
          </div>
       
    </Router>
  );
}

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default App;
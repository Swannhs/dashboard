import './App.css';
import Switch from "react-bootstrap/Switch";
import {BrowserRouter, Route} from "react-router-dom";
import LoginAction from "./components/Login/LoginAction";
import LoginUI from "./components/Login/LoginUI";
import Admin from "./layouts/Admin";

function App() {
    return (

        <BrowserRouter>
            {/*------------Public Route -------------------*/}
            <Route path='/' component={LoginAction}/>
            <Route exact path='/login' component={LoginUI}/>
            {/*------------Public Route -------------------*/}

            <Switch>
                <Route path="/admin" render={(props) => <Admin {...props} />}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;

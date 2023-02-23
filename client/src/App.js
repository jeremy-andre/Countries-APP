import "./App.css";
import { Route, useLocation } from "react-router-dom";
import { Home, Landing, Detail, Activities } from "./views/index";

import NavBar from "./components/NavBar/NavBar";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/" component={Landing} />
      <Route path="/detail/:detailId"  render={() =><Detail />} />
      <Route exact path="/create" component={Activities} />
      <Route path="/home" render={() => <Home />} />
    </div>  
  );
}

export default App;

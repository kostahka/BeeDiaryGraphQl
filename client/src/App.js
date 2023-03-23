import {BrowserRouter, Route, Routes} from "react-router-dom";
import ApiaryList from "./pages/ApiaryList/ApiaryList";
import Apiary from "./pages/Apiary/Apiary";
import Hive from "./pages/Hive/Hive";
import Header from "./partial/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import {useContext} from "react";
import {AuthContext} from "./contexts/AuthContext";
import PrivateContextLayout from "./components/PrivateContextLayout";

function App() {
    const {loginFail} = useContext(AuthContext)

  return (
    <div className="App">
      <Header/>

      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>

          <Route element={<PrivateContextLayout loginFail={loginFail}/>}>
              <Route path="/apiaries" element={<ApiaryList/>}/>
              <Route path="/apiary/:id" element={<Apiary/>}/>
              <Route path="/apiary/hive/:id" element={<Hive/>}/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;

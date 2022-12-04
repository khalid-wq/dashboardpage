import Home from "./pages/home/Home";
import Login from "./pages/login/Login"
import New from "./pages/new/New"
import Guide from "./pages/guide/Guide"
import Survey from "./pages/surveys/Survey"
import Settings from "./pages/settings/Settings"
import NoPage from "./pages/Nopage/NoPage";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  
  return (
    <div className="App">
        <BrowserRouter>
      <Routes>
      <Route path="/">
        <Route index element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
      
       <Route path="new">
          <Route index element={<New/>}/>
        </Route>
        <Route path="guide">
          <Route index element={<Guide/>}/>
        </Route>
        <Route path="survey">
          <Route index element={<Survey/>}/>
        </Route>
        <Route path="settings">
          <Route index element={<Settings/>}/>
        </Route>
        <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

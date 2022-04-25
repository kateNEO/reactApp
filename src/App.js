import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialog/Dialogs";
import {BrowserRouter , Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";



function App(props) {
  return (
      <BrowserRouter>
          <div className="App">
              <Header/>
              <Nav/>
              <div className='appWrapperContent'>
                  <Routes>
                      <Route path='/' element={<Profile/>}/>
                      <Route path='/profile' element={<Profile/>}/>
                      <Route path='/dialogs' element={<Dialogs/>}/>
                      <Route path='/news' element={<News/>}/>
                      <Route path='/music' element={<Music/>}/>
                      <Route path='/settings' element={<Settings/>}/>
                  </Routes>
              </div>

          </div>
      </BrowserRouter>
  );
}

export default App;

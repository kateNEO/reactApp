import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialog from "./components/Dialog/Dialog";

function App() {
  return (
    <div className="App">
        <Header />
        <Nav />
        {/*<Profile />*/}
        <div className='appWrapperContent'><Dialog /></div>


    </div>
  );
}

export default App;

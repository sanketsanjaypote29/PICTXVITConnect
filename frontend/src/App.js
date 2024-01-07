import logo from './logo.svg';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dash from './pages/Dash';
import Bkbud from './pages/bikebuddy_1';
import HaveBike from './pages/havebike';
import Wantbike from './pages/wantbike';
import Studyout from './pages/studyout';
import Buy_sell from './pages/buy_sell';
import Additem from './pages/additem';
import Index from './pages';
import Studyoption from './pages/study_option';
import Studyinput from './pages/studyinput';
import Buyerhome from './pages/buyer_home2';
import Roommate from './pages/roommate';
import Shareroom from './pages/shareroom';
import Roomfinder from './pages/roomfinderlist';
import Forumindex from './pages/forum_index';
function App() {
  return (
    <>
    <div>
      <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/dash" element={<Dash/>}/>
          <Route exact path="/bikebud" element={<Bkbud/>}/>
          <Route exact path="/havebike" element={<HaveBike/>}/>
          <Route exact path="/wantbike" element={<Wantbike/>}/>
          <Route exact path="/studyout" element={<Studyout/>}/>
          <Route exact path="/buy_sell" element={<Buy_sell/>}/>
          <Route exact path="/additem" element={<Additem/>}/>
          <Route exact path="/index" element={<Index/>}/>
          <Route exact path="/study_option" element={<Studyoption/>}/>
          <Route exact path="/studyinput" element={<Studyinput/>}/>
          <Route exact path="/buyer_home2" element={<Buyerhome/>}/>
          <Route exact path="/roommate" element={<Roommate/>}/>
          <Route exact path="/shareroom" element={<Shareroom/>}/>
          <Route exact path="/roomfinderlist" element={<Roomfinder/>}/>
          <Route exact path="/forumindex" element={<Forumindex/>}/>
        </Routes>
      </div>
    </Router>
    </div>
    </>
  );
}

export default App;

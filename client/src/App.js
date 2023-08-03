import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import MagazineList from './components/MagazineList';
import { useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import { getmagazine } from './redux/magazine/magazineSlice';
import { Route, Routes } from 'react-router';
import { getdoctor } from './redux/doctor/doctorSlice';
import Doctor from './components/Doctor';
import TraillerMagazine from './components/TraillerMagazine';
import TraillerDoctor from './components/TraillerDoctor';
import { getavis } from './redux/avis/avisSlice';
import Avis from './components/Avis';
import { userCurrent } from './redux/user/userSlice';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const magazines = useSelector((state) => state.magazine?.magazineliste);
  const doctors = useSelector((state) => state.doctor?.doctorliste);
  const avis = useSelector((state) => state.avis?.avisliste);
  const [ping, setping] = useState("");
  const [text, settext] = useState("")
  const [region, setregion] = useState("")
  const isAuth =  localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getmagazine()); 
    dispatch(getdoctor()); 
    dispatch(getavis());
    if (isAuth ) {
      dispatch(userCurrent())   
    }
  }, [ping]);
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={ <Header/>  } />
        <Route path="/about" element={ <About/> } />
        <Route path="/magazines" element= {<MagazineList ping={ping} setping={setping}/>} />
        <Route path="/doctors" element= {<Doctor ping={ping} setping={setping} text={text} settext={settext} region={region} setregion={setregion}/>} />
        <Route path="/trailler/:id" element={<TraillerMagazine magazines={magazines} ping={ping} setping={setping}  />} />
        <Route path="/trailler1/:id" element={<TraillerDoctor doctors={doctors} ping={ping} setping={setping}  />} />
        <Route path="/avis" element= {<Avis ping={ping} setping={setping}/>} />
        <Route path="/login" element={ <Login  ping={ping} setping={setping}/> } />
        <Route path="/signup" element={ <Signup  ping={ping} setping={setping}/> } />
      </Routes>
      
     
      
    </div>
  );
}

export default App;

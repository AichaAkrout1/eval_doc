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

function App() {
  const magazines = useSelector((state) => state.magazine?.magazineliste);
  const doctors = useSelector((state) => state.doctor?.doctorliste);
  const [ping, setping] = useState("");
  const [text, settext] = useState("")
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getmagazine()); 
    dispatch(getdoctor()); 
  }, [ping]);
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={ <Header/>  } />
        <Route path="/about" element={ <About/> } />
        <Route path="/magazines" element= {<MagazineList ping={ping} setping={setping}/>} />
        <Route path="/doctors" element= {<Doctor ping={ping} setping={setping} text={text} settext={settext}/>} />
        <Route path="/trailler/:id" element={<TraillerMagazine magazines={magazines} ping={ping} setping={setping}  />} />
        <Route path="/trailler1/:id" element={<TraillerDoctor doctors={doctors} ping={ping} setping={setping}  />} />
      </Routes>
      
     
      
    </div>
  );
}

export default App;

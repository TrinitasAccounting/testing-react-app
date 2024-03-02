import logo from './logo.svg';
import './App.css';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Example from './components/Example';
import Test from './components/Test';
import Temporary from './components/Temporary';
import NavBar from './components/NavBar';




function App() {
  return (
    // <div className="App">
    //   <h5>This is the App </h5>
    // </div>


    <Router>
      <Routes>
        <Route path="/" element={<Example />} >
          <Route path="temp" element={<Temporary />} />
          <Route path="test" element={<Test />} />
        </Route >
      </Routes>
    </Router>




  );
}

export default App;

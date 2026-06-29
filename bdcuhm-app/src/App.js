import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import About from './About';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    // <Container className="p-3">
    //   <h1>
    //   Ballroom Dance Club @ UH Manoa!
    // </h1>
    // <p>
    //   Our site is under construction... &#x1F6A7;
    // </p>
    //   <h2>
    //     &#x1F483; Upcoming Events:
    //   </h2>
    //     <h4>USA Dance Social at the Ala Wai Palladium!</h4>
    //     <ul>
    //     <li>
    //       Friday, June 12 ~ Doors open @ 6pm
    //       </li>
    //       <li>
    //       Enjoy a night of fun dancing!
    //       </li>
    //       <li>
    //       Entry fee: <b>$10</b> General, <b>$5</b> UH Student, <b>$1</b> USA Dance Honolulu Chapter Member
    //       </li>
    //     </ul>
    // </Container>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;

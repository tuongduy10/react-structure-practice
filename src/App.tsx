import React, { Suspense} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './features/home/index';

// const Home = React.lazy(() => import('./features/home/index'))
// const About = React.lazy(() => import('./features/about-us'))

function App() {

  return (
    <Router>
      <Routes>
        {/* <Route index path='/' element={Home} /> */}
      </Routes>
    </Router>
  )
}

export default App;

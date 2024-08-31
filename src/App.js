
import "./App.css";
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer/Footer';
import ROUTER from './Constant/Router';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import ReservationPage from "./Pages/Reservation/ReservationPage";

function App() {
  return (
    <div className="app-wrapper">
      {/* <Header /> */}
      <div className="app-content">
      <Routes>
        <Route path={ROUTER.HOME} element={<Home />} />
        <Route path={ROUTER.ABOUT} element={<About />} />
        <Route path={ROUTER.RESERVATION} element={<ReservationPage />} />

        {/* Add other routes if needed */}
      </Routes>
      </div>
      {/* <Footer /> */}
      </div>
  );
}

export default App;
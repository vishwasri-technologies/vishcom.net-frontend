import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Component/Home'
import Aboutus from './Component/Aboutus';
import Contactus from './Component/Contactus';
import Servies from './Component/Services';
import Custom from './Navbar/Custom';
import PrivacyPolicy from './Component/PrivacyPolicy';


import 'bootstrap/dist/css/bootstrap.min.css'
import Deleteaccount from './Component/Deleteaccount';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Custom />}></Route>
          <Route path='home' element={<Home />}></Route>
          <Route path='services' element={<Servies />}></Route>
          <Route path='contactus' element={<Contactus />}></Route>
          <Route path="aboutus" element={<Aboutus />}></Route>
          <Route path="privacypolicy" element={<PrivacyPolicy/>}></Route>
          <Route path="deleteaccount" element={<Deleteaccount/>}></Route>


        </Routes>
       


      </BrowserRouter>





    </div>
  );



}


export default App;
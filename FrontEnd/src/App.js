
import './App.css';
import NavbarComp from "./components/NavbarComp"
import Customers from "./components/Customers"
import Cars from "./components/Cars"
import Journal from "./components/Journal"
import { Route, Routes } from "react-router-dom"
import AddCustomer from './components/AddCustomer';
import CarManagement from './components/CarManagement';

import { useState } from 'react';


//  async function getData(){
//    const res = await fetch('http://localhost:3000');
//    console.log(res.body);
// }


function App() {
  return (
    <>
      <NavbarComp />
      <div className="container">
        <Routes>
          <Route>
            <Route path="/MyCustomers" element={<Customers />} />
            <Route path="/AddCustomer" element={<AddCustomer />} />
            <Route path="/CarManagement" element={<CarManagement />} />
            <Route path="/myCars" element={<Cars />} />
            <Route path="/RentalJourna" element={<Journal />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}


export default App;

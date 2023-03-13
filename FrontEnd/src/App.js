
import './App.css';
import NavbarComp from "./components/NavbarComp"
import Customers from "./components/Customers"
import { Modal } from 'antd'
import Cars from "./components/Cars"
import Journal from "./components/Journal"
import { Navigate, Route, Routes } from "react-router-dom"
import AddCustomer from './components/AddCustomer';
import CarManagement from './components/CarManagement';
import ManagerLogin from './components/ManagerLogin';
import { useAppContext } from './context/AppContext';
import NotFound from './components/NotFound';
import AddCar from './components/CarManagement';
import CarDetails from './components/details/CarDetails';
import CustomerDetails from './components/details/CustomerDetails';



function App() {

  const { manager, modalContent, closeModal } = useAppContext()

  if (!manager) {
    return (
      <>
        <NavbarComp />
        <div className="container">
          <Routes>
            <Route>
              <Route path="/Login" element={<ManagerLogin />} />
              <Route path="/" element={<Navigate to={"/Login"} />} />
              <Route path="*" element={<NotFound />}></Route>
            </Route>
          </Routes>
        </div>
      </>
    )
  }

  return (
    <>
      <NavbarComp />
      <div className="container">
        <Modal
          style={{ minWidth: '90vw', maxWidth: '700px', overflowX: "scroll" }}
          bodyStyle={{ minWidth: '90vw', maxWidth: '700px' }}
          open={modalContent !== undefined && modalContent !== null}
          cancelText="סגור"
          cancelButtonProps={{
            style: { width: '100%', fontFamily: 'Open Sans', fontSize: '18px', height: 'max-content' }
          }}
          onCancel={closeModal}
          okButtonProps={{
            style: { display: "none" }
          }}>
          {modalContent}
        </Modal>
        <Routes>
          <Route>
            <Route path="/MyCustomers" element={<Customers />} />
            <Route path="/" element={<Navigate to={"/MyCustomers"} />} />
            <Route path="/Login" element={<ManagerLogin />} />
            <Route path="/AddCustomer" element={<AddCustomer />} />
            <Route path="/CarManagement" element={<CarManagement />} />
            <Route path="/CarDetails/:carId" element={<CarDetails />} />
            <Route path="/CustomerDetails/:customerId" element={<CustomerDetails />} />
            <Route path="/myCars" element={<Cars />} />
            <Route path="/RentalJourna" element={<Journal />} />
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  )
}


export default App;

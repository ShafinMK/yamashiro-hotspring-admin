import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddFood from "./components/AddFood/AddFood";
import AddService from "./components/AddService/AddService";
import Carousals from "./components/Carousals/Carousals";
import CheckBookings from "./components/CheckBookings/CheckBookings";
import Foods from "./components/Foods/Foods";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Services from "./components/Services/Services";
import SignUp from "./components/SignUp/SignUp";
import UpdateFood from "./components/UpdateFood/UpdateFood";
import UpdateService from "./components/UpdateService/UpdateService";


function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<PrivateRoute><Services></Services></PrivateRoute>}></Route>
        <Route path='/foods' element={<PrivateRoute><Foods></Foods></PrivateRoute>}></Route>
        <Route path='/addFood' element={<PrivateRoute><AddFood></AddFood></PrivateRoute>}></Route>
        <Route path='/addService' element={<PrivateRoute><AddService></AddService></PrivateRoute>}></Route>
        <Route path='/updatefood/:foodid' element={<PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>}></Route>
        <Route path='/updateservice/:serviceid' element={<PrivateRoute><UpdateService></UpdateService></PrivateRoute>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/carousals' element={<Carousals/>}></Route>
        <Route path='/servicebookings/:servicename' element={<CheckBookings></CheckBookings>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;

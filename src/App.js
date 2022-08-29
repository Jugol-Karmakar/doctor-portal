import { Route, Routes } from "react-router-dom";
import "./App.css";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Home from "./Pages/Home/Home/Home";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import SignIn from "./Pages/Login/SignIn/SignIn";
import SignUp from "./Pages/Login/SignUp/SignUp";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointment from "./Pages/Dashboard/MyAppointment";
import MyReview from "./Pages/Dashboard/MyReview";
import Contact from "./Pages/Contact/Contact";
import AllUsers from "./Pages/Dashboard/AllUsers";
import Payment from "./Pages/Dashboard/Payment";
import Doctors from "./Pages/Doctors/Doctors";
import DoctorProfile from "./Pages/Doctors/DoctorProfile";
import About from "./Pages/About/About";
import MyProfile from "./Pages/Dashboard/MyProfile";
import AddDoctors from "./Pages/Dashboard/AddDoctors";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/doctors" element={<Doctors></Doctors>}></Route>
        <Route
          to="/doctors/:id"
          element={<DoctorProfile></DoctorProfile>}
        ></Route>
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        ></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointment />}></Route>
          <Route path="review" element={<MyReview />}></Route>
          <Route path="adddoctors" element={<AddDoctors />}></Route>
          <Route path="myprofile" element={<MyProfile />}></Route>
          <Route path="payment/:id" element={<Payment />}></Route>
          <Route path="users" element={<AllUsers></AllUsers>}></Route>
        </Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import Concerts from "./pages/Concerts";
import Comedy from "./pages/Comedy";
import Sports from "./pages/Sports";
import Theatre from "./pages/Theatre";
import SignIn from "./pages/SignIn";
import Booking from "./pages/Booking";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Login />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/concerts" element={<Concerts />} />
          <Route path="/comedy" element={<Comedy />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/theatre" element={<Theatre />} />
          <Route path="/booking" element={<Booking />} />
          
          
<Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}



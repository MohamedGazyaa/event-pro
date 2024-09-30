import { Route, Routes } from "react-router-dom";
import VendorLayout from "./Vendor/VendorLayout";
import Dashboard from "./Vendor/Pages/Dashboard";
import Bookings from "./Vendor/Pages/Bookings";
import Account from "./Vendor/Pages/Account";
import Calendar from "./Vendor/Pages/Calendar";
import { Services } from "./Vendor/Pages/Services";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<VendorLayout />}>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/account" element={<Account />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/services" element={<Services />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

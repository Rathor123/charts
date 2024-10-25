import Analytics from "./components/Analytics";
import DashBoard from "./components/DashBoard";
import Leads from "./components/Leads";
import Reports from "./components/Reports";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <div className="flex ">
      <BrowserRouter>
        <DashBoard />
        <Routes>
          <Route path="reports" element={<Reports />} />
          <Route path="leads" element={<Leads />} />
          <Route path="analytics" element={<Analytics />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

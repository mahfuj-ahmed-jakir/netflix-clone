import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import RegStepScene from "./pages/RegStepScene";
import RegForm from "./pages/RegForm";
import Registration from "./pages/Registration";
import PlanForm from "./pages/PlanForm";
import Payment from "./pages/Payment";
import CreditOption from "./pages/CreditOption";
import Login from "./pages/Login";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/registrationstep" element={<RegStepScene />} />
        <Route path="/registrationform" element={<RegForm />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/planform" element={<PlanForm />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/creditoption" element={<CreditOption />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

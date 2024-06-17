import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { MonthStatistics } from "./pages/MonthStatistics/MonthStatistics";


function App() {
  return (   
      <div>
        <Routes>
              <Route path="/Home"  element={<Home />}/>
              <Route path="/month-statistics" element={<MonthStatistics />}/>
        </Routes>
      </div>
  );
}
    
export default App;;


import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { MonthStatistics } from "./pages/MonthStatistics/MonthStatistics";
import { Header } from "./shared/Header/Header";
import { Popup } from "./shared/Popup/Popup";


function App() {
  return (
        <div className="main_container">
          {/* <Popup /> */}
            <div className="container">
                <Header />
                <Routes>
                      <Route path="/Home" element={<Home />}/>
                      <Route path="/month-statistics" element={<MonthStatistics />}/>
                </Routes>
        
            </div>
        </div>
  );
}
    
export default App;;


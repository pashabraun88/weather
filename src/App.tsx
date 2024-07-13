import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { MonthStatistics } from "./pages/MonthStatistics/MonthStatistics";
import { Header } from "./shared/Header/Header";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
      <WeatherProvider>
        <div className="main_container">
            <div className="container">
                <Header />
                <Home />
            </div>
        </div>
        </WeatherProvider>
  );
}

export default App;


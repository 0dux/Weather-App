import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { ThemeProvider } from "./Context/ThemeProvider";
import WeatherDashboard from "./pages/weatherDashboard";
import CityPage from "./pages/cityPage";

const App = () => {
  return (
    <div>
      <ThemeProvider defaultTheme="dark">
        <Layout>
          <Routes>
            <Route path="/" element={<WeatherDashboard />} />
            <Route path="/city/:cityName" element={<CityPage />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </div>
  );
};

export default App;

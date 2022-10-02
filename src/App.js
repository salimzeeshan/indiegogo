import './App.css';
import Navbar from './components/navbar';
import AllRoutes from './routes/routes';
import { Box } from "@chakra-ui/react"
import { IconContext } from "react-icons";
import Footer from './components/footer';

function App() {
  return (
    <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
      <div className="App">
        <Navbar />
        <Box>
          <AllRoutes />
        </Box>
        <Footer />
      </div>
    </IconContext.Provider>
  );
}

export default App;
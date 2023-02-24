import { BrowserRouter,Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Data from "./components/Data";
import Data2 from "./Data2";

function App() {
  return (
    <BrowserRouter>
      <div className="px-40 h-[100vh]">
        <Navbar />
        <Routes>
          <Route path="data" element={<Data/>}/>
          <Route path="data-ex" element={<Data2/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

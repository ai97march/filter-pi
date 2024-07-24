import "./App.css";
import MaterialTypeMaster from "./Master/Material/MaterialTypeMaster";
import MaterialMaster from "./Master/Material/MaterialMaster";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/MaterialTypeMaster" element={<MaterialTypeMaster />} />
        <Route path="/MaterialMaster" element={<MaterialMaster />} />
        <Route path="/" element={<Login />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;

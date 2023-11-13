import { Outlet } from "react-router-dom";
import Aside from "./components/Aside";

function App() {
  return (
    <div className="min-h-screen bg-[#f5f7f8]">
      <Aside />
      <div className="p-4 ml-80">
        <Outlet />
      </div>
    </div>
  );
}

export default App;

import { RouterProvider } from "react-router-dom";
import router from "./Router";

function App() {
  return (
    <div className="w-full bg-[#eee] font-montserrat">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

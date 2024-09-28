import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { GlobalProvider } from "./Hooks/AppCategory/GlobalState";

function App() {
  return (
    <div className="w-full bg-[#eee] font-montserrat">
      <GlobalProvider>
        <RouterProvider router={router} />
      </GlobalProvider>
    </div>
  );
}

export default App;

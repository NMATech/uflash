import { RouterProvider } from "react-router-dom";
import router from "./Router";

function App() {
  return (
    <div className="w-full md:w-[50%] bg-light-primary font-montserrat">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

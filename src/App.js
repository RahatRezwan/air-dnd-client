import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router/Router";
import "./Animation.css";

function App() {
   return (
      <div className="App">
         <RouterProvider router={router} />
      </div>
   );
}

export default App;

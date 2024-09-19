import Todos from "./pages/Todos/sub-pages";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Todos />
    </BrowserRouter>
  );
}

export default App;

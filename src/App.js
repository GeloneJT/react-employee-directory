import { BrowserRouter as Router } from "react-router-dom";
import Directory from "./pages/Directory";

function App() {
  return (
    <Router basename="/user-directory">
      <div>
        <Directory />
      </div>
    </Router>
  );
}

export default App;

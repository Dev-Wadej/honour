import "./scss/main.scss";
import Route from "./routes/Route";
import { HelmetProvider } from 'react-helmet-async';


const helmetContext = {};

function App() {
  return (
    <HelmetProvider context={helmetContext}>
    <Route/>
    </HelmetProvider>
  ) ;
}

export default App;

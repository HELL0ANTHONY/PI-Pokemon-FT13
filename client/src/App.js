import { withRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import Navbar from "./components/navbar/Navbar";

import "./App.css";

const App = ({ location }) => {
  return (
    <>
      {location.pathname !== "/" && <Navbar />}
      <Routes />
    </>
  );
};

export default withRouter(App);

import "./App.css";

// import react-router-dom
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { useEffect, useState } from "react";

// import pages
import Home from "../Pages/Home";
import Room from "../Pages/Room";
import SingleRoom from "../Pages/SingleRoom";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Admin from "../Pages/Admin";
import Error from "../Pages/Error";
import EditUser from "../Pages/EditUser";

// import components
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

function App() {
  const [userRole, setUserRole] = useState(localStorage.getItem("role"));

  useEffect(() => {
    const role = localStorage.getItem("role");
    setUserRole(role);
    console.log("role", role);
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/admin">
          {userRole === "ADMIN" ? <Admin /> : <Redirect to="/" />}
        </Route>
        <>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/rooms/" component={Room} />
            <Route exact path="/rooms/:id" component={SingleRoom} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/edit" component={EditUser} />
            <Route path="/edit/:email" component={EditUser} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </>
      </Switch>
    </Router>
  );
}

export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import Header from "./components/Nav";
import AboutUs from "./components/AboutUs";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import Dashboard from "./pages/Dashboard";
import Graph from "./components/Graph";

function App(props) {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={AboutUs} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route component={NoMatch} />
        </Switch>
        <Graph />, document.getElementById("root");
      </div>
    </Router>
  );
}

const user = {
  isAuthenticated: false,
  authenticate(cb) {
    user.isAuthenticated = true;
    setTimeout(cb, 100); // Fake async
  },
  signout(cb) {
    user.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

// function AuthButton() {
//   let history = useHistory();

//   return user.isAuthenticated ? (
//     <p>
//       Welcome!{" "}
//       <button
//         onClick={() => {
//           user.signout(() => history.push("/"));
//         }}
//       >
//         Sign out
//       </button>
//     </p>
//   ) : (
//     <p>You are not logged in.</p>
//   );
// }

// let history = useHistory();
// let location = useLocation();

// let { from } = location.state || { from: { pathname: "/" } };
// let login = () => {
//   fakeAuth.authenticate(() => {
//     history.replace(from);
//   });
// };

// function LoginPage() {
//   let history = useHistory();
//   let location = useLocation();

//   let { from } = location.state || { from: { pathname: "/" } };
//   let login = () => {
//     fakeAuth.authenticate(() => {
//       history.replace(from);
//     });
//   };

//   return (
//     <div>
//       <p>You must log in to view the page at {from.pathname}</p>
//       <button onClick={login}>Log in</button>
//     </div>
//   );
// }

export default App;

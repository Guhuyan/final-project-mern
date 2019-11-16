import { createContext, useContext } from "react";

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

// const user = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     user.isAuthenticated = true;
//     setTimeout(cb, 100); // Fake async
//   },
//   signout(cb) {
//     user.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }
// };

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

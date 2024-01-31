import { Routes, Route, Navigate } from "react-router-dom";
import Store from "./Pages/Store/Store";
import Error from "./Pages/Error/Error";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import { UserContext, User } from "./context/UserContext";
import { useMemo, useState } from "react";
import SignUp from "./Pages/SignUp/SignUp";
import Layout from "./Components/Layout/Layout";

function App() {
  const [user, setUser] = useState<User | null>(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") as string)
      : null
  );

  const handleChangeUser = (user: User) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const handleRemoveUser = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const contextValue = useMemo(
    () => ({ user, setUser: handleChangeUser, removeUser: handleRemoveUser }),
    [user]
  );

  return (
    <UserContext.Provider value={contextValue}>
      <Routes>
        <Route element={user ? <Layout /> : <Navigate to="/login" replace />}>
          <Route path="/" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route 
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" replace />}
        />
        <Route
          path="/signup"
          element={!user ? <SignUp /> : <Navigate to="/" replace />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;

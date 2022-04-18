import React from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
//   Link,
// } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "./context/AuthContext";

function App() {
//  const { user } = useContext(AuthContext);
  return <Profile/>;
  // (
  //   <Router>  
  //     <Routes>
  //       <Route exact path="/" element={<Home />}/>
  //       {/* user? <Home /> : <Register /> */}

  //       <Route path="login" element={ user? <Link to="/" /> : <Login />} /> 
        
          
  //       <Route path="register" element={ <Register />}/>     
  //       {/* user? <Link to="/" /> : */}
        
  //       <Route path="profile/username" element={<Profile/>}/>
       
  //     </Routes>
  //   </Router>
  // );
}

export default App;

//HIIIIIIIIIIII
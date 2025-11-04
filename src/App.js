// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// // import Login from "./component/login2/login";
// import Dashboard from "./component/Dashboard/Dashboard";


// function App() {
//   return (
//     <Router>
//       <Routes>
        
//         {/* <Route path="/" element={<Navigate to="/login" replace />} />

  
//         <Route path="/login" element={<Login />} /> */}
//         <Route path="/Dashboard" element={<Dashboard />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Dashboard from "./component/Dashboard/Dashboard";
// import Login from "./component/login2/login";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Navigate to="/dashboard" replace />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./component/Dashboard/Dashboard";
import Login from "./component/login2/login";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route — agar login nahi hua hai to /login par bhej de */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Dashboard (main layout) */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;


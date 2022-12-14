import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route } from "react-router-dom";
import RequireAuth from "./components/require-auth/RequireAuth";


import Authentication from "./pages/authentication/Authentication.jsx";
import Client from "./pages/client/Client.jsx";
import Admin from "./pages/admin/Admin.jsx";
import Home from "./pages/home/Home";
import MovieDetail from "./pages/movie-detail/MovieDetail";
import SelectTheatre from "./pages/select-theatre/SelectTheatre";
import SelectSeats from "./pages/select-seats/selectSeats";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Authentication />} />
        <Route path="/client" element={<Client />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/movie-detail/:movieId" element={<MovieDetail />} />
        <Route
          path="/buyTickets/:movieName/:movieId"
          element={<SelectTheatre />}
        />

        <Route element={<RequireAuth allowedRoles={["CUSTOMER"]} />}>
          <Route
            path="/movie/:movieId/:theatreId"
            element={<SelectSeats />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

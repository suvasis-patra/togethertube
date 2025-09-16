import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AuthLayout,
  HomeLayout,
  LandingPage,
  LoginPage,
  RegisterPage,
  Room,
  RoomLobby,
} from "./pages";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900">
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="roomlobby" element={<RoomLobby />} />
            <Route path="room/:roomId" element={<Room />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

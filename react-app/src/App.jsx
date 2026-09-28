import { useRoutes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";

export default function App() {
  return useRoutes([
    { path: "/", element: <WelcomePage /> },
  ]);
}

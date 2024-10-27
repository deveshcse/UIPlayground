import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Carousal from "./Components/Carousal";
import Home from "./Components/Home";
import Todo from "./Components/Todo";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import RatingReview from "./Components/RatingReview";





function RootLayout() {
  return (
    <div>
      <Navbar />  {/* Navbar will always render */}
      <Outlet />   {/* Render the matched route component here */}
    </div>
  );
}



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // Root component with Navbar and Outlet
    children: [
      { path: "/", element: <Home /> },
      { path: "todo", element: <Todo /> },
      { path: "carousal", element: <Carousal /> },
      {path: "/starRating", element: <RatingReview />},
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

function NotFoundPage() {
  return <h1>404 - Page Not Found</h1>;
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;

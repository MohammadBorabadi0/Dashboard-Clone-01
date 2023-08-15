// Context
import StateProvider from "./context/StateProvider";

// Packages
import "react-circular-progressbar/dist/styles.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Pages
import DashboardPage from "./pages/DashboardPage";
import RecipesPage from "./pages/RecipesPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import CartItemsPage from "./pages/CartItemsPage";
import SettingsPage from "./pages/SettingsPage";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  { path: "/", element: <DashboardPage /> },
  { path: "/recipes", element: <RecipesPage /> },
  { path: "/analytics", element: <AnalyticsPage /> },
  { path: "/settings", element: <SettingsPage /> },
  { path: "/cartitems", element: <CartItemsPage /> },
  { path: "*", element: <NotFound /> },
]);

const App = () => {
  return (
    <StateProvider>
      <RouterProvider router={router} />
    </StateProvider>
  );
};

export default App;

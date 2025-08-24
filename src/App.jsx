import AboutPage from "./pages/AboutPage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import TeamPage from "./pages/TeamPage.jsx";
import WholeSite from "./pages/WholeSite.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  // Routing
  const router = createBrowserRouter([
    {
      path: "/",
      element: <WholeSite />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/services",
      element: <ServicesPage />,
    },
    // {
    //   path: "/portfolio",
    //   element: <PortfolioPage />,
    // },
    {
      path: "/team",
      element: <TeamPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

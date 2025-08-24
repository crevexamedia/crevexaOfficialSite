import AboutPage from "./pages/AboutPage.jsx";
import CareersPage from "./pages/CareersPage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import TeamPage from "./pages/TeamPage.jsx";
import WholeSite from "./pages/WholeSite.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ScrollToTop from "./Utility/ScrollToTop.jsx";

function App() {
  // Routing
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ScrollToTop>
          <WholeSite />
        </ScrollToTop>
      ),
    },
    {
      path: "/about",
      element: (
        <ScrollToTop>
          <AboutPage />
        </ScrollToTop>
      ),
    },
    {
      path: "/services",
      element: (
        <ScrollToTop>
          <ServicesPage />
        </ScrollToTop>
      ),
    },
    // {
    //   path: "/portfolio",
    //   element: <PortfolioPage />,
    // },
    {
      path: "/team",
      element: (
        <ScrollToTop>
          <TeamPage />
        </ScrollToTop>
      ),
    },
    {
      path: "/careers",
      element: (
        <ScrollToTop>
          <CareersPage />
        </ScrollToTop>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

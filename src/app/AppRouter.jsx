import { Route, Routes } from "react-router-dom";

import LandingPage from "../modules/LandingPage/page/LandingPage";
import Products from "../modules/ProductsListPage/page/ProductsListPage";
import ProductDetail from "../modules/ProductDetailsPage/ProductDetail";

import ExplorePage from "./pages/ExplorePage/ExplorePage";
import FindASolutionPage from "./pages/FindASolution/FindASolutionPage";
import LearnMorePage from "./pages/LearnMore/LearnMorePage";
import NotFound from "./pages/NotFound/NotFound";

import ScrollToTop from "./ScrollToTop";

const AppRouter = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/products" element={<Products />} />
        <Route path="/products/:category/:slug" element={<ProductDetail />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/find-solution" element={<FindASolutionPage />} />
        <Route path="/learn-more" element={<LearnMorePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRouter;

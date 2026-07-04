import Footer from "../components/Footer";
import Header from "../components/Header";
import Seo from "../components/Seo";

export default function MainLayout({ children }) {
  return (
    <>
      <Seo />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" tabIndex="-1">
        {children}
      </main>
      <Footer />
    </>
  );
}

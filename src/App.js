import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Hero from "./components/hero";
import SearchForm from "./components/searchform";
import Services from "./components/services";
import Newsletter from "./components/newsletter";
import Footer from "./components/footer";
function App() {
  return (
    <main>
      <Navbar />
      <Sidebar />
      <Hero />
      <SearchForm />
      <Services />
      <Newsletter />
      <Footer />
    </main>
  );
}

export default App;

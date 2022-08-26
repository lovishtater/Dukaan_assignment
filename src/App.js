import "./App.css";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/ProductsContainer";
import Navbar from "./components/Navbar/Navbar";
import SloganContainer from "./components/Slogans/SloganContainer";

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <Navbar />
        <SloganContainer />
      </div>
      <main>
        <div className="features_box">
          <Features />
        </div>
        <Products />
      </main>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;

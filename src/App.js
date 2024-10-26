import Navbar from "./components/Navbar";
import Top from "./components/Top";
import Feature from "./components/Feature";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Test from "./components/Test";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Top />
        <Feature />
        <Workflow />
        <Pricing />
        <Test />
        <Footer />
      </div>
    </>
  );
}

export default App;

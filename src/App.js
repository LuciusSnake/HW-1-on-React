import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import RouteComponent from "./components/RouteComponent";

const App = () => {
  return (
    <div className="App">
      <Header />

      <RouteComponent />
      
      <Footer />
    </div>
  );
}

export default App;

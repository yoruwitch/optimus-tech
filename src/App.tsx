import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Metrics from "./components/Metrics";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <Header />
            <Metrics />
            <Banner/>
        </>
    );
}

export default App;

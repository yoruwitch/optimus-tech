import "./App.css";
import Banner from "./components/Banner";
import Depoimnets from "./components/Depoiments";
import Footer from "./components/Footer";
import Header from "./components/Header";
import JobOpening from "./components/JobOpening";
import Metrics from "./components/Metrics";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <Header />
            <Metrics />
            <Banner />
            <JobOpening />
            <Depoimnets />
            <Footer />
        </>
    );
}

export default App;

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Homepage/Home";
import Footer from "./components/Footer";
import TripListPage from "./components/Buspage/TripListPage";
import Receiptpage from "./components/Receiptpage";
import Stripe from "./components/StripePayment";
import Handle404 from "./components/Handle404";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/trip-list" component={TripListPage} />
        {/* <Route path="/checkout" component={Infopage} /> */}
        <Route path="/payment" component={Stripe} />
        <Route path="/receipt" component={Receiptpage} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="*" component={Handle404} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

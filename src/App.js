import React from "react";
import Header from "./Components/Header/Header";
import AllQuotes from "./Pages/AllQuotes";
import AddQuote from "./Pages/AddQuotes";
import { Route, Switch } from "react-router";
import QuoteDetails from "./Pages/QuoteDetails";
import NotFound from "./Pages/NotFound";
import Footer from "./Components/Content/Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/">
          <AllQuotes />
        </Route>
        {/* <Route path="/quote">
          <AllQuotes />
        </Route> */}
        <Route exact path="/addquotes">
          <AddQuote />
        </Route>
        <Route exact path="/quote/:id">
          <QuoteDetails />
        </Route>
        <Route path="/*">
            <NotFound />
        </Route>
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;

import "./App.css";
import React from "react";
import Header from "./Components/Header/Header";
import AllQuotes from "./Pages/AllQuotes";
import AddQuote from "./Pages/AddQuotes";
import { Route } from "react-router";
import QuoteDetails from "./Pages/QuoteDetails";


function App() {
  return (
    <React.Fragment>
      <Header />
      <Route exact path="/">
        <AllQuotes />
      </Route>
      <Route exact path="/addquotes">
        <AddQuote />
      </Route>
      <Route exact path="/quote/:title">
        <QuoteDetails />
      </Route>
    </React.Fragment>
  );
}

export default App;

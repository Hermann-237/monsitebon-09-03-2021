/* import {BrowserRouter,Switch,Route} from "react-router-dom" */
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { useContext, useState } from "react"
import './App.css';
import Header from "./components/Header"
import Products from "./components/Products"
import Index from "./components/Index"
import Translate from "./components/Translate"
import SingleVerb from "./components/SingleVerb"
import Footer from "./components/Footer"
import Synonyme from "./components/Synonyme"
import Dictionary from "./components/Dictionary"
import DataContext from "./context/DataContext"
function App() {
  const { data } = useContext(DataContext)
  console.log("voici hermann", data)
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact >
            <Index />
          </Route>
          <Route path="/products" exact >
            <Products />
          </Route>
          <Route path="/translate" exact >
            <Translate />
          </Route>
          <Route path="/conjugation" exact >
            <Index />
          </Route>
          <Route path="/privacy" exact >
            <Translate />
          </Route>
          <Route path="/blog" exact >
            <Translate />
          </Route>
          <Route path="/synonyme" exact >
            <Synonyme />
          </Route>
          <Route path="/synonyme/:synonyme" exact >
            <Synonyme />
          </Route>
          <Route path="/dictionary" exact >
            <Dictionary />
          </Route>
          <Route path="/dictionary/:dictionary" exact>
            <Dictionary />
          </Route>
          <Route path="/grammar" exact >
            <Translate />
          </Route>

          <Route path="/conjugation/:singleVerb"
          >
            <SingleVerb />
          </Route>

          <Route path="/translate/:translate" exact >
            <Translate />
          </Route>





        </Switch>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;

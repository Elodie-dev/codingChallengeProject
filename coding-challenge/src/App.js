import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home';
import Header from './component/Header';
import Footer from './component/Footer';
import Movies from './component/Movies';
import Series from './component/Series';
import MovieDetails from './component/MovieDetails';
import SerieDetails from './component/SerieDetails';

function NotFound(){
  return(<div>
    <p>Error 404 Page. Ooops something went wrong</p>
      </div>)
}

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/movies/:id" component={MovieDetails} />
          <Route exact path="/series" component={Series} />
          <Route exact path="/series/:id" component={SerieDetails} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

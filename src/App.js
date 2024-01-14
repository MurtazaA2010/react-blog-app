import './App.css';
import './index.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './NotFound'
import Create from './Create';
import Home from './home';
import Navbar from './Navbar';
import BlogDetails from './BlogDetails';
function App() {
  return (
    <Router>
      <div className="app">
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/create'>
            <Create/>
          </Route>
          <Route path='/blog/:id'>
            <BlogDetails/>
          </Route>
        <Route path='*'>
          <NotFound />
        </Route> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import Home from './Home.js';
import Voting from './voting/Voting';
import Breeds from './breeds/Breeds';
import Gallery from './gallery/Gallery';
import Search from './search/Search';
import Favourites from './favourites/Favourites';
import Likes from './likes/Likes';
import Dislikes from './dislikes/Dislikes';
import Details from './details/Details';
import Main from './Main.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router>
        <Home/>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/voting" component={Voting}/>
            <Route path="/breeds" component={Breeds}/>
            <Route path="/gallery" component={Gallery}/>
            <Route path="/search" component={Search}/>
            <Route path="/favourites" component={Favourites}/>
            <Route path="/likes" component={Likes}/>
            <Route path="/dislikes" component={Dislikes}/>
            <Route path="/details" component={Details}/> 
            
         </Switch>
        </Router>
    </div>
  );
}

export default App;

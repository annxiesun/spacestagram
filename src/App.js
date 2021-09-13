import { Provider } from './Context';
import Feed from './Feed';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PhotoDisplay from './PhotoDisplay';
import LikedPhotos from './LikedPhotos';

function App() {
  return (
    <Router>
      <Provider>
        <Switch>
          <Route path="/liked">
            <LikedPhotos />
          </Route>
          <Route path="/photo">
            <PhotoDisplay />
          </Route>
          <Route path="/">
            <Feed />
          </Route>
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;

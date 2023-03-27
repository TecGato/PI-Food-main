import './App.css';
import { Home } from './components/Home/Home.jsx';
import { Route, useLocation } from 'react-router-dom';
import Details from './components/Details/Details';
import FormCreate from './components/FormToCreate/FormToCreate';
import NavBar from './components/Navbar/NavBar';
import LandigPage from './components/LandingPage/LandingPage';

function App() {
  const location = useLocation();
  return (
    <div className='App'>
      {location.pathname === '/' ? <LandigPage /> : <NavBar />}
      <Route path='/home' exact>
        <Home />
      </Route>
      <Route path='/detail/:detailId'>
        <Details />
      </Route>
      <Route path={'/form'}>
        <FormCreate />
      </Route>
    </div>
  );
}

export default App;

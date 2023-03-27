import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import style from './NavBar.module.css';
import logo from '../../helpers/2.png';

const NavBar = () => {
  return (
    <div className={style.container}>
      <Link to={'/home'}>
        <img src={logo} className={style.image} />
      </Link>
      <SearchBar className={style.bar} />
      <Link to={'/'}>
        <button>Inicio</button>
      </Link>
    </div>
  );
};

export default NavBar;

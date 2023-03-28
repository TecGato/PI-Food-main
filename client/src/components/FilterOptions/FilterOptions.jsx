import { all } from 'axios';
import { useDispatch } from 'react-redux';
import {
  orderByName,
  orderByHealtScore,
  orderByDiets,
  deleteFilters,
  orderByOrigin,
} from '../../redux/actions';
import styles from './FilterOptions.module.css';

export const FilterOptions = (props) => {
  const dispatch = useDispatch();
  const handlerOrderByName = (event) => {
    dispatch(orderByName(event.target.value));
  };
  const handlerOrderByHealtScore = (event) => {
    dispatch(orderByHealtScore(event.target.value));
  };

  const handlerOrderByDiets = (event) => {
    props.setFirtsPage();
    dispatch(orderByDiets(event.target.value));
  };

  const handlerOrderByOrigin = (event) => {
    props.setFirtsPage();
    dispatch(orderByOrigin(event.target.value));
  };

  const handlerResetFilters = () => {
    document.getElementById('diet').value = 'all';
    document.getElementById('origin').value = 'Filter by Origin';
    document.getElementById('alfabetico').value = 'Order by A-Z';
    document.getElementById('healtscore').value = 'Order by HealtScore';
    dispatch(deleteFilters());
  };

  return (
    <div className={styles.container}>
      <select
        defaultValue='all'
        id='diet'
        onChange={handlerOrderByDiets}
        className={styles.select}
      >
        <option disabled value='all'>
          Filter by Type
        </option>
        {props.allDiets.map((diet) => (
          <option key={diet.id} value={diet.name}>
            {diet.name}
          </option>
        ))}
      </select>

      <select
        defaultValue='Filter by Origin'
        id='origin'
        onChange={handlerOrderByOrigin}
        className={styles.select}
      >
        <option disabled value='Filter by Origin'>
          Filter by Origin
        </option>
        <option value='DataBase'>Data Base</option>
        <option value='API'>API</option>
      </select>

      <select
        defaultValue='Order by A-Z'
        id='alfabetico'
        onChange={handlerOrderByName}
        className={styles.select}
      >
        <option disabled value='Order by A-Z'>
          Order by A-Z
        </option>
        <option value='ascendente'>Ascendente</option>
        <option value='descendente'>Descendente</option>
      </select>

      <select
        defaultValue='Order by HealtScore'
        id='healtscore'
        onChange={handlerOrderByHealtScore}
        className={styles.select}
      >
        <option disabled value='Order by HealtScore'>
          Order by HealtScore
        </option>
        <option value='ascendente'>Ascendente</option>
        <option value='descendente'>Descendente</option>
      </select>

      <button onClick={handlerResetFilters} className={styles.button}>
        Reset Filters
      </button>
    </div>
  );
};

export default FilterOptions;

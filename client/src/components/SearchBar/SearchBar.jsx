import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterSearchBar, getRecipesByQuery } from '../../redux/actions';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setName(value.toLowerCase());
    dispatch(filterSearchBar(name));
  };

  const handleSubmit = () => {
    if (name) {
      dispatch(getRecipesByQuery(name));
      setName('');
    }
  };

  return (
    <div className={styles.inputGroup}>
      <input
        placeholder='Search Recipe'
        type='text'
        onChange={handleChange}
        className={styles.input}
      />
      <button onClick={handleSubmit} className={styles.button}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;

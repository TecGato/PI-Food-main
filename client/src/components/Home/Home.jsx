import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllR, getAllD } from '../../redux/actions';
import FilterOptions from '../FilterOptions/FilterOptions.jsx';
import Pagination from '../Pagination/Pagination';
import Card from '../Card/Card';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

export const Home = () => {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);
  const allDiets = useSelector((state) => state.diets);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const currentItemsPage = [...allRecipes].slice(
    (currentPage - 1) * itemsPerPage,
    (currentPage - 1) * itemsPerPage + itemsPerPage
  );
  const maxPages = Math.ceil(allRecipes.length / itemsPerPage);
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const setFirtsPage = () => {
    setCurrentPage(1);
  };

  useEffect(() => {
    dispatch(getAllR());
    dispatch(getAllD());
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <Link to={'/form'}>
          <button>Create Recipe</button>
        </Link>
        <FilterOptions allDiets={allDiets} setFirtsPage={setFirtsPage} />
      </div>
      <div className={styles.pagination}>
        <Pagination
          currentPage={currentPage}
          nextPage={nextPage}
          previousPage={previousPage}
          maxPages={maxPages}
        />
      </div>
      {currentItemsPage.length !== 0 ? (
        <div className={styles.div}>
          {currentItemsPage.map((elemento) => (
            <Card
              key={elemento.id}
              name={elemento.name}
              image={elemento.image}
              diets={elemento.diets}
              id={elemento.id}
            />
          ))}
        </div>
      ) : (
        <div className={styles.load}>
          <div>G</div>
          <div>N</div>
          <div>I</div>
          <div>D</div>
          <div>A</div>
          <div>O</div>
          <div>L</div>
        </div>
      )}
    </div>
  );
};

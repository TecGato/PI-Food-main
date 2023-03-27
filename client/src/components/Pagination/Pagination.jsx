import React from 'react';
import styles from './Pagination.module.css';

const Pagination = (props) => {
  return (
    <div className={styles.contain}>
      <button
        onClick={props.previousPage}
        disabled={props.currentPage === 1 || props.maxPages === 0}
        className={styles.button}
      >
        {'<'}
      </button>
      <span className={styles.span}>
        {props.maxPages === 0 ? '0' : props.currentPage} de {props.maxPages}
      </span>
      <button
        onClick={props.nextPage}
        disabled={props.maxPages === 0 || props.currentPage === props.maxPages}
        className={styles.button}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;

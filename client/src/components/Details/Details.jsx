import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getRecipeDetail } from '../../redux/actions';
import styles from './Details.module.css';

const Details = () => {
  const { detailId } = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.detailRecipe);
  const history = useHistory();
  useEffect(() => {
    dispatch(getRecipeDetail(detailId));
  }, []);

  const Diets = details.diets
    ?.map((diet) => diet.charAt(0).toUpperCase() + diet.slice(1))
    .join(' - ');
  console.log(details);
  return (
    <div className={styles.container}>
      <div className={styles.divIzq}>
        <button onClick={() => history.push('/home')} className={styles.button}>
          Back
        </button>
        <h1 className={styles.h1}>{details.name}</h1>
        <h2 className={styles.h2}>{details.id}</h2>
        <h3 className={styles.h3}>{details.healthScore}</h3>
        <img src={details.image} alt={details.name} className={styles.img} />
      </div>
      <div className={styles.divDer}>
        <p
          dangerouslySetInnerHTML={{
            __html: details.summary,
          }}
          className={styles.p}
        ></p>
        <div className={styles.diets}>
          <h3>Diets:</h3>
          <p>{Diets}</p>
        </div>
      </div>
      <div className={styles.divAba}>
        <h3>Preparation: </h3>
        {details.steps?.map((step, index) => (
          <div key={index} className={styles.divSteps}>
            <h4 className={styles.h4}>{step.number}</h4>
            <p className={styles.p}>{step.step}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;

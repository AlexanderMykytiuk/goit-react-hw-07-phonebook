import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import styles from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <Loader type="BallTriangle" color="rgb(5, 54, 39)" height={80} width={80} timeout={2000}/>
    </div>
  );
};
export default Spinner;

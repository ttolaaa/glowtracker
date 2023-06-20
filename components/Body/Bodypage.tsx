import React from 'react';
import styles from './Bodypage.module.css';
import gifImage from '../../public/video.gif';

const Bodypage: React.FC = () => {
  const gifSrc = gifImage.src as string;
  return (
    <div className={styles.bodyPage}>
      <img className={styles.bodyPage} src={gifSrc} alt="Animation" />
    </div>
  );
};

export default Bodypage;

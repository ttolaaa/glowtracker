import React, { useState } from 'react';
import styles from './Userpage.module.css';
import LogoImg from '../../public/logo.png';

const Userpage: React.FC = () => {
  const logoSrc = LogoImg.src as string;
  const [currentDate, setCurrentDate] = useState(new Date());

  // Get the current month and year
  const currentMonth = currentDate.toLocaleString('en-US', { month: 'long' });
  const currentYear = currentDate.getFullYear();

  const handlePreviousMonth = () => {
    const previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
    setCurrentDate(previousMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
    setCurrentDate(nextMonth);
  };

  // Generate the calendar cells
  const generateCalendarCells = () => {
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const startingDay = firstDayOfMonth.getDay();

    const cells = [];

    // Add blank cells for previous month
    for (let i = 0; i < startingDay; i++) {
      cells.push(<div className={styles.calendarCell} key={`blank-${i}`}></div>);
    }

    // Add cells for current month
    for (let day = 1; day <= daysInMonth; day++) {
      cells.push(
        <div className={styles.calendarCell} key={`day-${day}`}>
          {day}
        </div>
      );
    }

    return cells;
  };

  return (
    <div className={styles.userpageContainer}>
      <div className={styles.leftColumn}>
        <img className={styles.logoImg} src={logoSrc} alt="Animation" />
        <p>Name: Tola Som</p>
        <p>Name (in Hiragana): ソム　トラ</p>
      </div>

      <div className={styles.rightColumn}>
        <div className={styles.calendarHeader}>
          <button onClick={handlePreviousMonth} className={styles.prevMonth}>Previous</button>
          <span className={styles.currentMonth}> Month : {`${currentMonth} ${currentYear}`} </span>
          <button onClick={handleNextMonth} className={styles.nextMonth}>Next</button>
        </div>

        <div className={styles.calendar}>
          <div className={styles.calendarHeader}>月</div>
          <div className={styles.calendarHeader}>火</div>
          <div className={styles.calendarHeader}>水</div>
          <div className={styles.calendarHeader}>木</div>
          <div className={styles.calendarHeader}>金</div>
          <div className={styles.calendarHeader}>土</div>
          <div className={styles.calendarHeader}>日</div>

          {/* Calendar cells */}
          {generateCalendarCells()}
        </div>
      </div>
    </div>
  );
};

export default Userpage;

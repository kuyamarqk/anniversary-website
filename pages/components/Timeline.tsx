import React from 'react';
import styles from '../../styles/Timeline.module.css';

const Timeline = () => {
  const events = [
    {
      year: '2009',
      event: 'YOU BECAME THE BEST PART OF MY LIFE',
    },
    {
      year: '2010',
      event: 'OUR FIRST YEAR TOGETHER',
    },
    {
      year: '2011',
      event: 'OUR SECOND YEAR TOGETHER',
    },
    {
      year: '2012',
      event: 'RAYEZA BEA CAME, OUR THIRD YEAR TOGETHER',
    },
    {
      year: '2013',
      event: 'GOT MARRIED, REYA BRYZE CAME, 1ST BIRTHDAY OF RAYEZA BEA, OUR FOURTH YEAR TOGETHER',
    },
    {
      year: '2014',
      event: 'SO MUCH TRIAL, THE TWO GOT SICK BUT WE STILL SURVIVED, OUR FIFTH YEAR TOGETHER',
  },
    {
        year: '2015',
        event: 'OUR SIXTH YEAR TOGETHER',
    },
    {
        year: '2016',
        event: 'TRANSFER TO A NEW HOUSE AND STARTED FROM NOTHING, OUR SEVENTH YEAR TOGETHER',
    },
    {
        year: '2017',
        event: 'OUR FIRST TRAVEL TOGETHER WITH MY BATCHMATE FROM QUEZON PROVINCE, OUR EIGHT YEAR TOGETHER',
    },
    {
        year: '2018',
        event: 'OUR NINTH YEAR TOGETHER',
    },
    {
        year: '2019',
        event: 'OUR TENTH YEAR TOGETHER',
    },
    {
        year: '2020',
        event: 'COVID 19  - ROELLA BYUL CAME, OUR ELEVENTH YEAR TOGETHER',
    },
    {
        year: '2021',
        event: '1ST BIRTHDAY OF BYUL - OUR TWELVETH YEAR TOGETHER',
    },
    {
        year: '2022',
        event: 'OUR THIRTEENTH YEAR TOGETHER',
    },
    {
        year: '2023',
        event: 'OUR FOURTEENTH YEAR TOGETHER',
    },
  ];

  return (
    <section className={styles.timelineSection} id="timeline">
      <div className={styles.container}>
        <h2 className={styles.timelineHeading}>Our Journey Together</h2>
        <ul className={styles.timelineList}>
          {events.map((event, index) => (
            <li className={styles.timelineItem} key={index}>
              <div className={styles.timelineYear}>{event.year}</div>
              <div className={styles.timelineContent}>{event.event}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Timeline;

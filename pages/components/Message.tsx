import React from 'react';
import styles from '../../styles/Message.module.css';

const Message = () => {
  return (
    <section className={styles.messageSection} id="message">
      <div className={styles.container}>
        <h2 className={styles.messageHeading}>A Message for You</h2>
        <div className={styles.messageContent}>
          <p>Dear Bernadette Maqueda,</p>
          <p>Happy 14th anniversary! I can't believe it's been 14 years since we first started dating. It feels like just yesterday we were two young people, falling in love for the first time.</p>
          <p>In the past 14 years, we've shared so much together. We've laughed together, cried together, and supported each other through thick and thin. You are my best friend, my lover, and the person I want to spend the rest of my life with.</p>
          <p>You are the most amazing woman I know. You are kind, compassionate, intelligent, and beautiful. I am so lucky to have you in my life.</p>
          <p>I love you more than words can say. Thank you for being my everything.</p>
          <p>Love always,</p>
          <p>Raymart Maqueda</p>
        </div>
      </div>
    </section>
  );
};

export default Message;

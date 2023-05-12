import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css';
import Timeline from './components/Timeline';
import Memories from './components/Memories';
import Message from './components/Message';
import Nav from './components/Nav';
import HomeComponent from './components/HomeComponent';
import Hero from './components/Hero';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Happy 14th Anniversary!</title>
      </Head>
      <Nav />
      <section id="home">
        <HomeComponent />
      </section>
      <Hero/>
      
      <section id="timeline">
        <div>
          <Timeline />
        </div>
      </section>
      <section id="memories">
        <div>
          <Memories />
        </div>
      </section>
      <section id="message">
        <div>
          <Message />
        </div>
      </section>
      <Footer />
    </div>
  );
}

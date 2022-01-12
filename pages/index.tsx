import type {NextPage} from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import CarForm from "./Car";
import Search from "./Search";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>redis-fulltext</title>
                <meta name="description" content="redis-fulltext"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <span className={styles.blue}>redis-fulltext</span>
                </h1>

                <div>
                    <Search/>
                </div>
                <div>
                    <CarForm/>
                </div>
            </main>

            <footer className={styles.footer}>
                2022.01.12
            </footer>
        </div>
    );
};

export default Home;

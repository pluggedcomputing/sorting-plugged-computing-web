import { Link } from 'react-router-dom';
import capa from '../../assets/images/home/capa.png';
import { Helmet } from 'react-helmet';
import styles from './home.module.css';

const index = () => {
    return (
        <div className={styles.container}>
            <Helmet htmlAttributes={{ lang: 'pt-Br' }}>
                <title>Computação Plugada Ordenação</title>
            </Helmet>
            <div className={styles.content}>
                <img src={capa} alt="Cover" />
                <h2 className={styles.title}>O MAIS LEVE E O MAIS PESADO</h2>
                <Link to="/setup">
                    <button type="button" className={styles.btn}>INICIAR</button>
                </Link>
            </div>
        </div>
    );
};

export default index;

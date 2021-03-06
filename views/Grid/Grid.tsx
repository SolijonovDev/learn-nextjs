import { Htag } from "../../components/Htag/Htag";
import styles from './grid.module.scss';


export const Grid = () => {
    return (
        <div className={styles.grid}>
            <Htag tag="h1">Grid test</Htag>
            <div className={styles.container}>
                <div className={styles.c1}>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div className={styles.c6}>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>9</div>
                <div>9</div>
                <div>9</div>
                <div>9</div>
            </div>
        </div>
    );
}; 
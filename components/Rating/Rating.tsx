import { FC, useEffect, useState } from "react";
import { IRating } from "./Rating.type";
import RedStar from '../../public/red-star.svg';
import EmptyStar from '../../public/star-empty.svg';
import styles from './rating.module.scss';
import cn from 'classnames';


export const Rating: FC<IRating> = ({ rating, isEditable, setRating }): JSX.Element => {
    const [elements, setElements] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        updateRating(rating);
    }, [rating]);

    const updateRating = (num) => {
        const updateElements = elements.map((s, i) => {
            if (i < num) {
                return <svg className={styles.fill} xmlns="http://www.w3.org/2000/svg" width="2500" height="2379" viewBox="0 0 1235 1175" fill="#de0000"><path d="M0 449h1235l-999 726L618 0l382 1175L0 449z" /></svg>;
            }
            return <svg className={styles.empty} xmlns="http://www.w3.org/2000/svg" width="2500" height="2379" viewBox="0 0 1235 1175" fill="#ffffff"><path d="M0 449h1235l-999 726L618 0l382 1175L0 449z" /></svg>;
        });
        setElements(updateElements);
    };

    const changeRating = (num: number) => {
        if(!isEditable){
             return;
        }
        updateRating(num);
    };
    return (
        <div className={styles.rating} tabIndex={10}>
            {elements.map((v, i) => <span
                className={cn(styles.star,{
                  [styles.iditable]:isEditable
                })}
                onMouseEnter={() => changeRating(i + 1)}
                onMouseLeave={() => changeRating(rating)}
                onClick={() => setRating(i + 1)}
                key={i} tabIndex={1}>{v}</span>)}
        </div>
    );
};
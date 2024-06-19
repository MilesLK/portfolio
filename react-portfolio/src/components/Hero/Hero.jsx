import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    return  <section className={styles.container}>
        <div className={styles.content}> 
        <h1 className={styles.title}> Hi, Je suis Brice</h1>
        <p className={styles.description}> Je suis un développeur fullstack avec 1 an d'experience j'utilise react, utilise la barre de navigation si tu veux en savoir plus à mon sujet </p>
        <a className={styles.contactBtn} href="mailto:bricefrancietta@hotmail.com"> Me contacter </a>        
        </div>
        <img className={styles.heroImg} src={getImageUrl('hero/heroImage.png')} alt="Ma photo" />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>;
}
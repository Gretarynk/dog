import styles from "../Footer/footer.module.css";
import instagram from "../../public/icons8-instagram.svg";
import facebook from "../../public/icons8-facebook.svg";
import twitter from "../../public/icons8-twitter.svg";

const Footer=()=>{
    return(
        <div className={styles.main}>
<img className={styles.logo} src="https://cdn.imgbin.com/0/13/15/imgbin-dog-logo-snout-veterinarian-canidae-dog-aFZdhjv1jnCwgyhvm7vmtZGvP.jpg"/>
<div className={styles.social}>
    <img className={styles.social} src={instagram.src}/>
    <img className={styles.social} src={twitter.src}/>
    <img className={styles.social} src={facebook.src}/>
</div>
        </div>
    )
}

export default Footer
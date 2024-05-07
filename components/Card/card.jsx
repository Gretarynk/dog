
import styles from "../Card/card.module.css";
import RefreshButton from "../ButtonRefresh/buttonRefresh";

const Card=({text,message,content})=>{
    console.log(message, content)
    return(
        <div className={styles.main}>
            <img className={styles.photo} src={message}/>
            <div className={styles.text}>
            <h1>{text}</h1>
            <h3>"{content}"</h3>
<RefreshButton/>
</div>
        </div>
    )
}

export default Card
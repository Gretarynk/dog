import CardWrapper from "../CardWrapper/cardWrapper";
import styles from "../Main/main.module.css";
// import RefreshButton from "../ButtonRefresh/buttonRefresh";

const Main=({dogs,quotes})=>{
    return(
        <div className={styles.main}>
            <CardWrapper dogs={dogs} quotes={quotes}/>
        {/* <RefreshButton/> */}
        </div>
    )
}

export default Main
import axios from "axios";
import styles from "../ButtonRefresh/buttonRefresh.module.css"


const RefreshButton = ({ onClick }) => {
    const handleRefresh=()=>{
        window.location.reload();
    };
 
    return <button className={styles.refreshBtn} onClick={handleRefresh}> Next wisdom </button>
  }
  
  export default RefreshButton;
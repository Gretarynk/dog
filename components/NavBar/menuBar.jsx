import styles from "../NavBar/navBar.module.css"

const MenuBar=({title,link})=>{
    return (
       
            <a className={styles.links} href={link}>{title}</a>
            
          
     
    )
}
export default MenuBar